'use client'

import { useState } from 'react'
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'
import Image from 'next/image'

import historia from '@/data/historia.json'

interface HistorySlide {
  title: string
  date: string
  description: string
  imageUrl: string
  imageAlt: string
}

export default function HistorySlider() {
  const historySlides = historia as HistorySlide[]

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
              <h3 className="text-lg font-bold md:text-xl">
                {currentSlide.title}
              </h3>

              <span className="text-sm font-medium italic text-neutral-500">
                {currentSlide.date}
              </span>

              <p className="text-neutral-600">
                {currentSlide.description}
              </p>
            </div>

            <div className="aspect-4/3 w-full overflow-hidden rounded-lg">
              <Image
                src={currentSlide.imageUrl}
                alt={currentSlide.imageAlt}
                width={500}
                height={300}
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
            <h3 className="text-lg font-bold">
              {currentSlide.title}
            </h3>

            <span className="text-sm font-medium italic text-neutral-500">
              {currentSlide.date}
            </span>

            <p className="text-neutral-600">
              {currentSlide.description}
            </p>
          </div>

          <div className="aspect-4/3 w-full overflow-hidden rounded-lg">
            <Image
              src={currentSlide.imageUrl}
              alt={currentSlide.imageAlt}
              width={500}
              height={300}
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
                currentIndex === index
                  ? 'w-6 bg-pink-500'
                  : 'w-2 bg-pink-200 hover:bg-pink-300'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}