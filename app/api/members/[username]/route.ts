import { NextResponse } from 'next/server'
import { getMemberByUsername } from '@/lib/members-data'

interface RouteParams {
  params: Promise<{ username: string }>
}

export async function GET(_: Request, { params }: RouteParams) {
  const { username } = await params
  const member = await getMemberByUsername(username)

  if (!member) {
    return NextResponse.json({ error: 'Integrante nao encontrada.' }, { status: 404 })
  }

  return NextResponse.json({
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
  })
}
