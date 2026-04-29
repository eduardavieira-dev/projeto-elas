'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, type ReactNode } from 'react'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-primary py-4">
      <div className="container mx-auto px-4 md:px-16 flex items-center justify-between text-white font-medium">
        <Link href="/" className="w-26">
          <img src="/elas.svg" alt="Logo Elas++" />
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <NavLink href="/" active={pathname === '/'}>
            Início
          </NavLink>
          <NavLink href="/Oficinas" active={pathname === '/Oficinas'}>
            Oficinas
          </NavLink>
          <NavLink href="/Eventos" active={pathname === '/Eventos'}>
            Eventos
          </NavLink>
          <NavLink href="/Publicacoes" active={pathname === '/Publicacoes'}>
            Publicações
          </NavLink>
          <NavLink href="/Sobre" active={pathname === '/Sobre'}>
            Sobre nós
          </NavLink>
        </div>
        <button
          className="md:hidden relative h-10 w-10 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 rounded bg-white transition-transform duration-400 ${
              open ? 'translate-y-0 rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 rounded bg-white transition-all duration-400 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-0.5 w-6 -translate-x-1/2 rounded bg-white transition-transform duration-400 ${
              open ? 'translate-y-0 -rotate-45' : 'translate-y-2'
            }`}
          />
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-2 border-t border-white/20 px-5 pb-5 pt-4">
          <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-400">
            <NavLink href="/" active={pathname === '/'} onClick={() => setOpen(false)}>
              Início
            </NavLink>
            <NavLink
              href="/Oficinas"
              active={pathname === '/Oficinas'}
              onClick={() => setOpen(false)}
            >
              Oficinas
            </NavLink>
            <NavLink
              href="/Eventos"
              active={pathname === '/Eventos'}
              onClick={() => setOpen(false)}
            >
              Eventos
            </NavLink>
            <NavLink
              href="/Publicacoes"
              active={pathname === '/Publicacoes'}
              onClick={() => setOpen(false)}
            >
              Publicações
            </NavLink>
            <NavLink href="/Sobre" active={pathname === '/Sobre'} onClick={() => setOpen(false)}>
              Sobre nós
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({
  href,
  children,
  active,
  onClick,
}: {
  href: string
  children: ReactNode
  active: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative inline-flex w-fit px-1 py-2 md:py-1 text-white/95 transition-colors duration-400 hover:text-white"
    >
      <span>{children}</span>
      <span
        className={`absolute left-0 -bottom-0.5 h-0.5 w-full origin-center rounded-full bg-white transition-transform duration-400 ease-out ${
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </Link>
  )
}
