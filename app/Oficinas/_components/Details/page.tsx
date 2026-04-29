'use client'
import { Footer } from '@/app/components/Footer'
import { Navbar } from '@/app/components/Navbar'
import { ArrowLeftIcon } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Oficina {
  id: string
  title: string
  date: string
  location: string
  description: string
  objective: string
  responsibles: string[]
  categories: string[]
  images: string[]
}

export function Details({ oficina }: { oficina: Oficina }) {
  const router = useRouter()
  const fallbackImages = ['/elas.jpg', '/elas.jpg', '/elas.jpg']
  const images = (() => {
    const current = Array.isArray(oficina.images) ? [...oficina.images] : []
    while (current.length < 3) current.push(fallbackImages[current.length] ?? '/elas.jpg')
    return current
  })()

  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedImage = images[selectedIndex] ?? images[0]

  const goPrevImage = () => {
    setSelectedIndex((current) => (current - 1 + images.length) % images.length)
  }

  const goNextImage = () => {
    setSelectedIndex((current) => (current + 1) % images.length)
  }

  return (
    <section>
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-6">
        <span
          onClick={() => router.back()}
          className="text-pink-600 cursor-pointer mb-5 inline-flex items-center gap-1 border border-pink-300/50 bg-pink-50/70 text-xs font-medium px-2 py-1 rounded-md w-max hover:bg-pink-300/30"
        >
          <ArrowLeftIcon size={20} /> Voltar
        </span>

        <h2 className="text-2xl font-bold">{oficina.title}</h2>

        <div className="flex flex-col md:flex-row gap-6 ">
          <div className="md:min-w-120 mx-auto">
            <div className="relative">
              <img
                src={selectedImage}
                alt={`Foto da oficina: ${oficina.title}`}
                className="w-90 md:w-150 h-80 mb-3 md:h-100 object-cover rounded-md"
              />

              <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-3">
                <button
                  type="button"
                  onClick={goPrevImage}
                  aria-label="Imagem anterior"
                  className="rounded-md border border-white/40 bg-black/35 px-3 py-2 text-xs font-semibold text-white backdrop-blur hover:bg-black/45"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={goNextImage}
                  aria-label="Próxima imagem"
                  className="rounded-md border border-white/40 bg-black/35 px-3 py-2 text-xs font-semibold text-white backdrop-blur hover:bg-black/45"
                >
                  Próxima
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Miniatura ${i + 1} da oficina: ${oficina.title}`}
                  onClick={() => setSelectedIndex(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 object-cover rounded-md cursor-pointer border ${
                    i === selectedIndex ? 'border-primary' : 'border-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-10 text-md">
              <span>
                <b>Data:</b> {oficina.date}
              </span>
              <span>
                <b>Local:</b> {oficina.location}
              </span>
            </div>

            <div className="border-t-2 border-pink-300/20"></div>

            <div>
              <h4 className="font-bold">Descrição</h4>
              <p>{oficina.description}</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold">Objetivo</h4>
          <p>{oficina.objective}</p>
        </div>

        <div>
          <h4 className="font-bold">Responsáveis</h4>
          <div className="flex gap-1 mt-2 flex-wrap">
            {oficina.responsibles.map((r, i) => (
              <span className="bg-pink-200/90 text-pink-600 px-2 text-xs py-1 rounded-full" key={i}>
                {r}{' '}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold">Categorias</h4>
          <div className="flex gap-1 mt-2 flex-wrap">
            {oficina.categories.map((c, i) => (
              <span
                key={i}
                className="bg-purple-200 text-purple-700 px-2 py-1 rounded-full text-xs"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}
