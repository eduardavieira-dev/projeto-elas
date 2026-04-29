'use client'
import { useRouter } from 'next/navigation'
import { CalendarDotsIcon, MapPinIcon } from '@phosphor-icons/react'

interface CardOficinaProps {
  id: string
  title: string
  date: string
  location: string
  description: string
  categories: string[]
  cover: string
}

export function CardOficina({
  id,
  title,
  date,
  location,
  description,
  categories,
  cover
}: CardOficinaProps) {
  const router = useRouter()

  return (
    <div className="bg-card rounded-lg border border-neutral-200 w-full max-w-md">
      <img
        src={cover}
        className="w-full h-50 object-cover rounded-t-md"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">
          {title}
        </h3>

        <div className="flex items-center gap-2 mb-1">
          <CalendarDotsIcon size={16} className="text-neutral-600" />
          <p className="text-sm text-neutral-600">Data: {date}</p>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <MapPinIcon size={16} className="text-neutral-600" />
          <p className="text-sm text-neutral-600">
            Local: {location}
          </p>
        </div>

        <p className="text-xs font-medium mb-1 line-clamp-3 text-neutral-600">
          {description}
        </p>

        <div className="my-3 flex gap-1 flex-wrap">
          {categories.map((cat, index) => (
            <span
              key={index}
              className="text-[10px] border border-neutral-200 text-neutral-600 font-medium px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        <button
          onClick={() => router.push(`/Oficinas/${id}`)}
          className="flex w-full py-3 px-4 mt-4 bg-primary text-white border border-primary/40 items-center justify-center rounded-md text-sm font-semibold hover:bg-primary-hover transition cursor-pointer"
        >
          Ver detalhes
        </button>
      </div>
    </div>
  )
}