'use client'
import { InstagramLogo, LinkedinLogo, LinkSimple } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="bg-footer text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        {/* Sobre o Elas++ */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src="/elas.svg" className="w-16 mb-3" alt="Logo Elas++" />
            <p className="text-sm text-purple-100">
              Elas++ é um projeto de extensão que incentiva a participação de mulheres na
              tecnologia, promovendo inclusão, empoderamento e oportunidades de desenvolvimento
              profissional.
            </p>
          </div>

          {/* Campi PUC */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-3">Nossas Unidades</h3>
            <ul className="text-sm text-purple-100 space-y-2">
              <li>
                <strong>Coração Eucarístico:</strong> Av. Dom José Gaspar, 500 (Prédio
                34/Hackerspace) - Belo Horizonte
              </li>
              <li>
                <strong>Lourdes:</strong> R. Cláudio Manoel, 1162 - Savassi - Belo Horizonte
              </li>
              <li>
                <strong>Betim:</strong> R. do Rosário, 1081 - Angola
              </li>
              <li>
                <strong>Contagem:</strong> R. Rio Comprido - Cinco
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-3">Nossas Redes</h3>
            <div className="flex flex-col space-y-2 text-sm text-purple-100">
              <a
                href="https://www.instagram.com/elasmaismais/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition flex items-center gap-2"
              >
                <InstagramLogo size={20} />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/elasmaismais/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition flex items-center gap-2"
              >
                <LinkedinLogo size={20} />
                LinkedIn
              </a>
              <a
                href="https://linktr.ee/elasmaismaiss"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition flex items-center gap-2"
              >
                <LinkSimple size={20} />
                Linktree
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-200 pt-6 text-center text-sm text-purple-100">
          &copy; {new Date().getFullYear()} Elas++. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
