import { ArrowSquareOutIcon, CalendarDotsIcon, FileTextIcon } from '@phosphor-icons/react'
import { UsersIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface CardPubProps {
  type: 'Instagram' | 'Linkedin'
  title: string
  team: string
  date: string
  description: string
  tags: string[]
  link: string
}
export function CardPub({ type, title, team, date, description, tags, link }: CardPubProps) {
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
          className="flex h-full flex-col rounded-lg border border-neutral-300 p-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-2">
              <FileTextIcon size={24} className="text-pink-600" />
              <span className="inline-block bg-pink-50/70 text-pink-600 border border-pink-300 text-xs px-2 py-1 rounded-full font-medium ">
                {type}
              </span>
            </div>

            <ArrowSquareOutIcon size={20} className="text-neutral-700" />
          </div>

          <h3 className="mb-2 line-clamp-2 min-h-14 text-lg font-semibold">{title}</h3>
          <div className="text-neutral-500 text-xs mb-2 flex items-center gap-2">
            <UsersIcon size={16} />
            <span>{team}</span>
          </div>
          <div className="text-neutral-500 text-xs mb-2 flex items-center gap-2">
            <CalendarDotsIcon size={16} />
            <span>Data: {date}</span>
          </div>
          <p className="mb-3 line-clamp-4 min-h-16 text-sm text-neutral-600">{description}</p>

          <div id="pills" className="flex min-h-16 content-start gap-1.5 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-purple-50 border border-purple-500/30 text-purple-700/65 font-medium text-xs px-2 py-1 rounded-full "
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-2 pt-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-sm font-medium text-white transition hover:bg-primary-hover hover:text-white"
            >
              Acessar conteúdo
            </a>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {type} • {team} • {date}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <div className="text-sm text-neutral-700 leading-relaxed">{description}</div>

          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="inline-block bg-purple-50 border border-purple-500/30 text-purple-700/65 font-medium text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Acessar conteúdo
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
