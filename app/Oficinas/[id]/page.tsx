import oficinas from '@/data/oficinas.json'
import { Details } from '../_components/Details/page'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const oficina = oficinas.find((o) => o.id === id)

  if (!oficina) return <div>Não encontrada</div>

  return <Details oficina={oficina} />
}