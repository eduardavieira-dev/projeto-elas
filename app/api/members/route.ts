import { NextRequest, NextResponse } from 'next/server'
import { getMembersWithGithubData, MemberRole } from '@/lib/members-data'

const VALID_ROLES: MemberRole[] = ['membra', 'ex-membra', 'coordenadora']

export async function GET(request: NextRequest) {
  const role = request.nextUrl.searchParams.get('role')?.toLowerCase()

  if (role && !VALID_ROLES.includes(role as MemberRole)) {
    return NextResponse.json(
      {
        error: 'Parametro role invalido. Use: membra, ex-membra ou coordenadora.',
      },
      { status: 400 },
    )
  }

  const filteredMembers = await getMembersWithGithubData(role as MemberRole | undefined)

  return NextResponse.json({
    total: filteredMembers.length,
    integrantes: filteredMembers.map((member) => ({
      username: member.username,
      nome: member.name,
      descricao: member.description,
      cargo: member.role,
      foto: member.photoUrl,
      github: member.githubUrl,
      links: {
        linkedin: member.socialLinks?.linkedin ?? null,
        instagram: member.socialLinks?.instagram ?? null,
        portfolio: member.socialLinks?.portfolio ?? null,
      },
    })),
  })
}
