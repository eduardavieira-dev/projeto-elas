'use client'
import { FunnelIcon, MagnifyingGlassIcon, XIcon } from '@phosphor-icons/react'
import { useMemo, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CardPub } from './_components/CardPub/page'
import publicacoes from '@/data/publicacoes.json'

interface Publicacao {
  type: 'Instagram' | 'Linkedin'
  title: string
  team: string
  date: string
  description: string
  tags: string[]
  link: string
}

const monthToNumber: Record<string, number> = {
  janeiro: 1,
  fevereiro: 2,
  marco: 3,
  abril: 4,
  maio: 5,
  junho: 6,
  julho: 7,
  agosto: 8,
  setembro: 9,
  outubro: 10,
  novembro: 11,
  dezembro: 12,
}

function parseMonthYear(date: string) {
  const normalizedDate = date
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()

  const [monthRaw, yearRaw] = normalizedDate.split(' de ')
  const month = monthToNumber[monthRaw] ?? 1
  const year = Number(yearRaw) || 0

  return { month, year }
}

const filtros = [
  {
    titulo: 'Materiais',
    itens: ['Artigo Cientifico', 'Material Cientifico', 'Relatorio', 'Tutorial'],
  },
  {
    titulo: 'Areas de analise',
    itens: ['Educacao', 'Resultados', 'Estatisticas'],
  },
  {
    titulo: 'Etapas Tecnicas',
    itens: ['Desenvolvimento', 'Tecnologia'],
  },
  {
    titulo: 'Redes Sociais',
    itens: ['Instagram', 'LinkedIn'],
  },
]

const topicosRapidos = ['Educacao', 'Resultados', 'Desenvolvimento', 'Tecnologia', 'Instagram']

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

export default function Publicacoes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFiltersByCategory, setSelectedFiltersByCategory] = useState<
    Record<string, string[]>
  >(() =>
    filtros.reduce(
      (acc, filtro) => ({ ...acc, [filtro.titulo]: [] }),
      {} as Record<string, string[]>
    )
  )

  const publicacoesOrdenadas = useMemo(
    () =>
      [...(publicacoes as Publicacao[])].sort((a, b) => {
        const parsedA = parseMonthYear(a.date)
        const parsedB = parseMonthYear(b.date)

        if (parsedA.year !== parsedB.year) {
          return parsedB.year - parsedA.year
        }

        return parsedB.month - parsedA.month
      }),
    []
  )

  const isFilterSelected = (category: string, item: string) =>
    selectedFiltersByCategory[category]?.some((i) => normalizeText(i) === normalizeText(item)) ??
    false

  const toggleFilter = (category: string, item: string) => {
    setSelectedFiltersByCategory((prev) => {
      const categoryItems = prev[category] ?? []

      const exists = categoryItems.some((i) => normalizeText(i) === normalizeText(item))

      const nextItems = exists
        ? categoryItems.filter((i) => normalizeText(i) !== normalizeText(item))
        : [...categoryItems, item]

      return {
        ...prev,
        [category]: nextItems,
      }
    })
  }

  const findCategoryByItem = (item: string) => {
    const foundFilter = filtros.find((filtro) => filtro.itens.includes(item))
    return foundFilter?.titulo ?? null
  }

  const clearFilters = () => {
    setSelectedFiltersByCategory(
      filtros.reduce(
        (acc, filtro) => ({ ...acc, [filtro.titulo]: [] }),
        {} as Record<string, string[]>
      )
    )
    setSearchTerm('')
  }

  const filteredPublicacoes = useMemo(() => {
    const normalizedSearch = normalizeText(searchTerm)

    return publicacoesOrdenadas.filter((publicacao) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [
          publicacao.title,
          publicacao.description,
          publicacao.team,
          publicacao.date,
          publicacao.type,
          ...publicacao.tags,
        ].some((value) => normalizeText(value).includes(normalizedSearch))

      if (!matchesSearch) return false

      return filtros.every((filtro) => {
        const selectedInCategory = selectedFiltersByCategory[filtro.titulo] ?? []

        if (!selectedInCategory.length) return true

        return selectedInCategory.some((selectedItem) => {
          if (filtro.titulo === 'Redes Sociais') {
            return normalizeText(publicacao.type) === normalizeText(selectedItem)
          }

          return publicacao.tags.some((tag) => normalizeText(tag) === normalizeText(selectedItem))
        })
      })
    })
  }, [publicacoesOrdenadas, searchTerm, selectedFiltersByCategory])

  const hasActiveFilters =
    Object.values(selectedFiltersByCategory).some((arr) => arr.length > 0) || searchTerm.length > 0

  return (
    <section className="overflow-x-clip">
      <Navbar />

      <div className="my-10 px-4 sm:px-6">
        <section className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 lg:flex-row lg:items-start">
          <aside className="w-full rounded-2xl bg-white p-5 lg:sticky lg:top-6 lg:w-72 lg:shrink-0">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <FunnelIcon size={22} className="text-pink-500" />
                <h3 className="text-lg font-semibold">Filtrar</h3>
              </div>

             
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="flex gap-1 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-600 transition hover:border-sky-400 hover:bg-sky-100"
                >
                  <XIcon size={14} />
                  Limpar Filtros
                </button>
              )}
            </div>

            <div className="mt-5 space-y-4">
              {filtros.map((filtro) => (
                <div key={filtro.titulo}>
                  <h4 className="text-sm font-semibold uppercase text-neutral-700">
                    {filtro.titulo}
                  </h4>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {filtro.itens.map((item) => {
                      const isActive = isFilterSelected(filtro.titulo, item)

                      return (
                        <button
                          key={item}
                          onClick={() => toggleFilter(filtro.titulo, item)}
                          className={`rounded-full border px-3 py-1.5 text-xs transition ${
                            isActive
                              ? 'border-pink-400 bg-pink-50 text-pink-600'
                              : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-pink-400 hover:bg-pink-50 hover:text-pink-600'
                          }`}
                        >
                          {item}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <main className="min-w-0 flex-1 px-1 py-2 sm:px-2">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-3">
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-11 w-full rounded-lg border border-neutral-300 px-4 transition-colors duration-200 hover:border-pink-300 focus:border-pink-400 focus:outline-none"
                  placeholder="Pesquise..."
                />
                <button className="bg-primary px-3 text-white rounded-full">
                  <MagnifyingGlassIcon size={20} />
                </button>
              </div>
            </form>

            <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredPublicacoes.map((publicacao, index) => (
                <CardPub key={`${publicacao.title}-${index}`} {...publicacao} />
              ))}

              {filteredPublicacoes.length === 0 && (
                <div className="col-span-full text-center">Nenhuma publicação encontrada</div>
              )}
            </section>
          </main>
        </section>
      </div>

      <Footer />
    </section>
  )
}
