'use client'

import Image from 'next/image'
interface CardEventoProps {
  title: string
  date: string
  description: string
  location: string
  imageUrl: string
  status?: 'Concluído' | 'Ativo'
  eventUrl?: string
  isEventPassed?: boolean
}

import { CalendarDotsIcon, MapPinIcon } from '@phosphor-icons/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function CardEvento(props: CardEventoProps) {
  const isEventPassed = props.isEventPassed ?? true

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              ;(e.currentTarget as HTMLDivElement).click()
            }
          }}
          className="bg-card text-card-foreground rounded-lg border border-neutral-200 w-full max-w-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 hover:scale-101 ease-in-out duration-200 hover:shadow-lg"
        >
          <Image
            src={props.imageUrl}
            alt={`foto do evento ${props.title}`}
            className="w-full h-50 object-cover object-center rounded-t-md" width={400} height={200}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2" id="event-title">
              {props.title}
            </h3>
            <div className="flex items-center justify-between my-3">
              <div className="flex items-center gap-2 ">
                <CalendarDotsIcon size={16} className="text-neutral-600" />
                <p className="text-sm text-neutral-600 ">Data: {props.date}</p>
              </div>
              <div className="bg-soft-primary/50 p-1 px-3 rounded-xl">
                <p className="text-xs text-pink-500">{isEventPassed ? 'Concluído' : 'Ativo'}</p>
              </div>
            </div>
            <p className="text-base mb-4 line-clamp-4" id="description">
              {props.description}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <MapPinIcon size={20} className="text-neutral-600" />
              <p className="text-sm text-neutral-600" id="location">
                Local: {props.location}
              </p>
            </div>

            {!isEventPassed && props.eventUrl && (
              <a
                href={props.eventUrl}
                onClick={(e) => e.stopPropagation()}
                className="mt-2 flex w-full py-2 px-4 bg-primary items-center justify-center rounded-md text-white text-center text-sm font-semibold hover:bg-primary-hover transition-colors ease-in-out duration-300"
              >
                Acessar evento
              </a>
            )}
          </div>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>
            {isEventPassed ? 'Evento concluído' : 'Evento ativo'}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          <Image
            src={props.imageUrl}
            alt={`foto do evento ${props.title}`}
            className="w-full max-h-[60vh] rounded-md object-contain bg-neutral-50" width={600} height={400}
          />

          <div className="flex flex-col gap-2 text-sm text-neutral-700">
            <div className="flex items-center gap-2">
              <CalendarDotsIcon size={16} className="text-neutral-600" />
              <span>Data: {props.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon size={18} className="text-neutral-600" />
              <span>Local: {props.location}</span>
            </div>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-neutral-700">{props.description}</p>
          </div>

          {!isEventPassed && props.eventUrl && (
            <a
              href={props.eventUrl}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Acessar evento
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
