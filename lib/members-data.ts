import membersJson from '@/data/members.json'

export type MemberRole = 'membra' | 'ex-membra' | 'coordenadora'

export interface MemberSocialLinks {
  linkedin?: string
  instagram?: string
  portfolio?: string
}

export interface MemberBase {
  username: string
  name: string
  role: MemberRole
  description?: string
  photoUrl?: string
  socialLinks?: MemberSocialLinks
}

export interface MemberProfile extends MemberBase {
  description: string
  githubUrl: string
}

interface GithubUserResponse {
  bio?: string | null
  avatar_url?: string
  html_url?: string
}

interface ResolvedGithubProfile {
  bio: string | null
  avatarUrl: string
  githubUrl: string
}

export const DEFAULT_MEMBER_PHOTO_URL =
  'https://ui-avatars.com/api/?name=Elas%2B%2B&background=FCE7F3&color=BE185D&size=256&bold=true'

const DEFAULT_MEMBER_DESCRIPTION = 'Integrante do projeto Elas++.'

export const MEMBERS: MemberBase[] = membersJson as MemberBase[]
async function getGithubProfile(username: string): Promise<ResolvedGithubProfile> {
  const fallbackAvatarUrl = `https://github.com/${username}.png?size=256`
  const fallbackGithubUrl = `https://github.com/${username}`

  const extractBioFromHtml = (html: string) => {
    const bioMatch = html.match(/<div[^>]*class="[^"]*p-note[^"]*user-profile-bio[^"]*"[^>]*>([\s\S]*?)<\/div>/i)

    if (!bioMatch?.[1]) {
      return null
    }

    const normalizedBio = bioMatch[1]
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim()

    return normalizedBio || null
  }

  const getGithubBioFallback = async () => {
    try {
      const profileResponse = await fetch(fallbackGithubUrl, {
        cache: 'no-store',
      })

      if (!profileResponse.ok) {
        return null
      }

      const html = await profileResponse.text()
      return extractBioFromHtml(html)
    } catch {
      return null
    }
  }

  try {
    const githubToken = process.env.GITHUB_TOKEN

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'elas-plus-plus-app',
        ...(githubToken ? { Authorization: `Bearer ${githubToken}` } : {}),
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      const fallbackBio = await getGithubBioFallback()

      return {
        bio: fallbackBio,
        avatarUrl: fallbackAvatarUrl,
        githubUrl: fallbackGithubUrl,
      }
    }

    const apiData = (await response.json()) as GithubUserResponse
    const fallbackBio = await getGithubBioFallback()

    return {
      bio: apiData.bio?.trim() || fallbackBio,
      avatarUrl: apiData.avatar_url || fallbackAvatarUrl,
      githubUrl: apiData.html_url || fallbackGithubUrl,
    }
  } catch {
    const fallbackBio = await getGithubBioFallback()

    return {
      bio: fallbackBio,
      avatarUrl: fallbackAvatarUrl,
      githubUrl: fallbackGithubUrl,
    }
  }
}

function enrichMember(baseMember: MemberBase, githubProfile: ResolvedGithubProfile): MemberProfile {
  const description = githubProfile.bio || baseMember.description?.trim() || DEFAULT_MEMBER_DESCRIPTION

  return {
    ...baseMember,
    description,
    githubUrl: githubProfile.githubUrl,
    photoUrl: baseMember.photoUrl || githubProfile.avatarUrl,
  }
}

export async function getMembersWithGithubData(role?: MemberRole): Promise<MemberProfile[]> {
  const baseMembers = role ? MEMBERS.filter((member) => member.role === role) : MEMBERS

  return Promise.all(
    baseMembers.map(async (member) => {
      const githubProfile = await getGithubProfile(member.username)
      return enrichMember(member, githubProfile)
    }),
  )
}

export async function getMemberByUsername(username: string): Promise<MemberProfile | null> {
  const normalizedUsername = username.trim().toLowerCase()
  const baseMember = MEMBERS.find((member) => member.username.toLowerCase() === normalizedUsername)

  if (!baseMember) {
    return null
  }

  const githubProfile = await getGithubProfile(baseMember.username)
  return enrichMember(baseMember, githubProfile)
}
