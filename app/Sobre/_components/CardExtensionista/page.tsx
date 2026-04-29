'use client'
import {
  GithubLogoIcon,
  GlobeIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react'

interface CardExtensionistaProps {
  imageUrl?: string
  name: string
  position: string
  description: string
  linkedinUrl?: string
  githubUrl?: string
  instagramUrl?: string
  websiteUrl?: string
}

export default function CardExtensionista(props: CardExtensionistaProps) {
  const fallbackImageUrl =
    'https://ui-avatars.com/api/?name=Elas%2B%2B&background=FCE7F3&color=BE185D&size=256&bold=true'

  const {
    imageUrl = fallbackImageUrl,
    name,
    position,
    description,
    linkedinUrl,
    githubUrl,
    instagramUrl,
    websiteUrl,
  } = props

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6 w-full max-w-xs mx-auto text-center">
      <img
        src={imageUrl}
        alt={name}
        className="rounded-full w-32 mx-auto"
        onError={(event) => {
          event.currentTarget.src = fallbackImageUrl
        }}
      />
      <h3 className="text-lg font-semibold mt-3">{name}</h3>
      <span className="text-xs text-muted-foreground">{position}</span>
      <p className="text-sm text-neutral-600 line-clamp-2">{description}</p>
      <div id="redes" className="flex gap-2 mx-auto justify-center mt-4 text-pink-500">
        {linkedinUrl && (
          <div className="bg-pink-200/70 p-1.5 rounded-sm">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <LinkedinLogoIcon size={18} />
            </a>
          </div>
        )}
        {githubUrl && (
          <div className="bg-pink-200/70 p-1.5 rounded-sm">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubLogoIcon size={18} />
            </a>
          </div>
        )}
        {instagramUrl && (
          <div className="bg-pink-200/70 p-1.5 rounded-sm">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <InstagramLogoIcon size={18} />
            </a>
          </div>
        )}
        {websiteUrl && (
          <div className="bg-pink-200/70 p-1.5 rounded-sm">
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <GlobeIcon size={18} />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
