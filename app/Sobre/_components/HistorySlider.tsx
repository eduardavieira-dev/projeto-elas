'use client'

import { useState } from 'react'
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'

interface HistorySlide {
  title: string
  date: string
  description: string
  imageUrl: string
  imageAlt: string
}

const historySlides: HistorySlide[] = [
  {
    title: 'Fundacao do Projeto Elas++',
    date: 'Agosto 2022',
    description:
      'Criado em 2022 pela professora Luciana Diniz, o projeto Elas++ com carater extensionista e intermitente decorre da necessidade de despertar o interesse de mais e mais mulheres para a area de tecnologia, informatica e computacao na cidade de Belo Horizonte e regiao.',
    imageUrl: 'https://elasmaismais.icei.pucminas.br/images/foto7.jpg',
    imageAlt: 'Fundacao do projeto Elas++',
  },
  {
    title: 'Os Primeiros Passos',
    date: '2022 - 2023',
    description:
      'As primeiras integrantes do projeto, interessadas e comprometidas com essa missão, desenvolveram um papel fundamental para os primeiros passos do projeto.',
    imageUrl: 'https://i.ibb.co/jvmhT2nZ/oficina2024.jpg',
    imageAlt: 'Crescimento da comunidade Elas++',
  },
  {
    title: 'Crescimento e Visibilidade',
    date: '2023',
    description:
      'Com o passar do tempo, o projeto foi ganhando mais visibilidade com as atividades desenvolvidas pelas integrantes: oficinas sobre fundamentos da computação, utilizando abordagens plugadas e desplugadas. O intuito é desmistificar a área de tecnologia e disseminar seus princípios, permitindo que as estudantes se sintam pertencentes e incluídas.',
    imageUrl: 'https://i.ibb.co/3mcm0nms/oficina.jpg',
    imageAlt: 'Crescimento da comunidade Elas++',
  },
  {
    title: 'Um Case de Sucesso',
    date: '2023 - 2024',
    description:
      'O projeto teve um grande case de sucesso quando Izabel Chaves, aluna do ensino médio, do Colégio Sagrado Coração de Maria, participou de uma oficina do Elas++ no ano de 2023, tornando-se integrante do projeto quando iniciou seu bacharel em Ciência da Computação no ano de 2024 na PUC Minas Lourdes.',
    imageUrl: 'https://i.ibb.co/nqvYJw5b/oficinas-case.jpg',
    imageAlt: 'Case de sucesso do projeto Elas++',
  },
  {
    title: 'Parceria com Sydle',
    date: '2023',
    description:
      'Com o intuito de ganhar mais visibilidade e patrocínios, o projeto fez uma parceria com a empresa Sydle. A SYDLE é uma empresa brasileira especializada em transformação digital, que vem dando suporte ao Elas++ desde então, colaborando com as iniciativas do projeto.',
    imageUrl: 'https://i.ibb.co/FkyTJ7rx/sydle.jpg',
    imageAlt: 'Foto na Sydle',
  },
  {
    title: 'Expansão para Novos Campos',
    date: '2023 - 2024',
    description:
      'Além da unidade Lourdes, o projeto atingiu mais campi da PUC Minas: Coração Eucarístico, Contagem e Betim, ampliando seu alcance e impacto na região.',
    imageUrl: 'https://i.ibb.co/Q72JkxMw/gdg.jpg',
    imageAlt: 'Expansão do projeto Elas++ para novos campos da PUC Minas',
  },
  {
    title: 'Chegada da Professora Amália',
    date: '2024',
    description:
      'Com a entrada da Professora Amália, o projeto recebeu mais impulso e crescimento. Suas habilidades de integrar as meninas e sua excelência profissional têm sido fundamentais para a continuidade e prosperidade do Elas++.',
    imageUrl: 'https://i.ibb.co/2bmhjkN/amalia.jpg',
    imageAlt: 'Chegada da Professora Amália ao projeto Elas++',
  },
  {
    title: 'Presente e Futuro',
    date: '2024',
    description:
      'Atualmente o projeto realiza eventos com profissionais do sexo feminino, rodas de conversas com alunas, oficinas de programação e publica artigos. Essas ações favorecem a inclusão e representatividade feminina, além de construir redes de contato e um ambiente de apoio e acolhimento.',
    imageUrl: 'https://i.ibb.co/gFzYTjcN/adalovelace.jpg',
    imageAlt: 'Presente e Futuro do projeto Elas++',
  },
  {
    title: '3 anos de Elas++',
    date: '2026',
    description:
      'Em 2026, o projeto Elas++ comemora 3 anos de existência, consolidando-se como uma iniciativa importante para a promoção da diversidade e inclusão na área de tecnologia. O futuro do projeto é promissor, com planos de expandir ainda mais suas atividades e impactar positivamente a vida de muitas meninas e mulheres interessadas em tecnologia.',
    imageUrl: 'https://res.cloudinary.com/dxwbd9xhy/image/upload/q_auto/f_auto/v1777288297/IMG_2637_pkwnlg.jpg',
    imageAlt: '3 anos do projeto Elas++',
  },
]

export default function HistorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = historySlides.length
  const currentSlide = historySlides[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  return (
    <section id="slides" className="my-10 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="hidden items-center gap-4 md:flex md:gap-6">
          <button
            type="button"
            onClick={goToPrevious}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-500 text-white transition hover:bg-pink-600"
            aria-label="Slide anterior"
          >
            <CaretLeftIcon size={18} />
          </button>

          <div className="grid flex-1 items-center gap-6 md:grid-cols-2 md:gap-10">
            <div className="min-w-0 flex flex-col gap-2">
              <h3 className="text-lg font-bold md:text-xl">{currentSlide.title}</h3>
              <span className="text-sm font-medium italic text-neutral-500">
                {currentSlide.date}
              </span>
              <p className="text-neutral-600">{currentSlide.description}</p>
            </div>

            <div className="aspect-4/3 w-full overflow-hidden rounded-lg">
              <img
                src={currentSlide.imageUrl}
                alt={currentSlide.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-500 text-white transition hover:bg-pink-600"
            aria-label="Proximo slide"
          >
            <CaretRightIcon size={18} />
          </button>
        </div>

        <div className="grid items-center gap-6 md:hidden">
          <div className="min-w-0 flex flex-col gap-2">
            <h3 className="text-lg font-bold">{currentSlide.title}</h3>
            <span className="text-sm font-medium italic text-neutral-500">{currentSlide.date}</span>
            <p className="text-neutral-600">{currentSlide.description}</p>
          </div>

          <div className="aspect-4/3 w-full overflow-hidden rounded-lg">
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white transition hover:bg-pink-600"
              aria-label="Slide anterior"
            >
              <CaretLeftIcon size={18} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white transition hover:bg-pink-600"
              aria-label="Proximo slide"
            >
              <CaretRightIcon size={18} />
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {historySlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition ${
                currentIndex === index ? 'w-6 bg-pink-500' : 'w-2 bg-pink-200 hover:bg-pink-300'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
