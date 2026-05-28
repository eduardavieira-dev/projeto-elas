'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Code,
  UsersThree,
  Heart,
  MailboxIcon,
  DesktopIcon,
} from '@phosphor-icons/react'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Apoiadores } from './components/Apoiadores'
import { MailIcon } from 'lucide-react'

export default function Home() {
  const valores = [
  'Inclusão',
  'Representatividade',
  'Comunidade',
  'Inovação',
  'Tecnologia',
  'Diversidade',
  'Educação',
  'Criatividade',
  'Futuro',
]
  return (
    <div>
      <Navbar />

      <div className="overflow-hidden bg-white">
          <section className="bg-primary text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
              <div className="text-center md:text-left max-w-xl">
                <h1 className="md:text-5xl  text-4xl font-poppins font-extrabold mb-6">Elas++</h1>
            <p className="mb-6 text-lg">
              O Elas++ é um projeto de extensão universitária da PUC Minas que visa aumentar a
              participação feminina na área de tecnologia.
            </p>

                <div className="mt-8 flex flex-row gap-4 justify-center md:justify-start">
                  <Link
                    href="/Sobre"
                    className="group bg-white text-primary font-semibold px-6 py-3 rounded-2xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Conheça o projeto
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/Oficinas"
                    className="border text-white border-gray-300/40 bg-gray-300/10 backdrop-blur-sm px-6 py-3 rounded-2xl font-medium hover:bg-gray-300/20 transition-all duration-300"
                  >
                    Ver oficinas
                  </Link>
                </div>

                {/* MÉTRICAS */}
                <div className="grid grid-cols-3 gap-4 mt-10 max-w-md mx-auto md:mx-0">
                  <div className="bg-gray-300/10 border border-gray-300/30 rounded-2xl p-4 text-center">
                    <h3 className="text-2xl font-bold">+20</h3>
                    <p className="text-xs  mt-1">Participantes</p>
                  </div>

                  <div className="bg-gray-300/10 border border-gray-300/30 rounded-2xl p-4 text-center">
                    <h3 className="text-2xl font-bold">10+</h3>
                    <p className="text-xs  mt-1">Rodas de conversa</p>
                  </div>

                  <div className="bg-gray-300/10 border border-gray-300/30 rounded-2xl p-4 text-center">
                    <h3 className="text-2xl font-bold">100%</h3>
                    <p className="text-xs  mt-1">Inclusão</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 shadow-lg">
                  <img src="elas.jpg" alt="Projeto Elas++" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALORES */}


<section className="relative overflow-hidden border-y border-pink-100 bg-pink-50 py-5">

  {/* fade lateral */}
  <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-pink-50 to-transparent" />

  <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-pink-50 to-transparent" />

  <div className="marquee-track">
    {[...valores, ...valores].map((item, index) => (
      <span
        key={index}
        className="shrink-0 text-sm font-semibold uppercase tracking-widest text-pink-500 md:text-base"
      >
        {item}
      </span>
    ))}
  </div>
</section>

        {/* SOBRE */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <span className="font-semibold uppercase tracking-[0.25em] text-pink-500">
                Sobre o projeto
              </span>

              <h2 className="mt-4 text-4xl font-black leading-tight text-gray-800 md:text-5xl">
                Criando oportunidades
                <span className="block text-pink-500">para mulheres na tecnologia.</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                O Elas++ nasceu para mostrar que a tecnologia também pertence às mulheres. Nosso
                objetivo é inspirar meninas através de experiências práticas, oficinas e conexões
                reais com o universo tech.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Construímos um ambiente acolhedor, criativo e colaborativo onde cada participante
                pode aprender, crescer e descobrir novas possibilidades para o futuro.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="group rounded-3xl border border-pink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-500">
                  <Code size={24} weight="fill" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800">Oficinas práticas</h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  Atividades mão na massa que aproximam meninas do desenvolvimento, design,
                  programação e inovação.
                </p>
              </div>

              <div className="group rounded-3xl border border-pink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-500">
                  <UsersThree size={24} weight="fill" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800">Comunidade acolhedora</h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  Criamos conexões, compartilhamos experiências e fortalecemos a presença feminina
                  no universo tech.
                </p>
              </div>

              <div className="group rounded-3xl border border-pink-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-500">
                  <Heart size={24} weight="fill" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800">Impacto social</h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  Promovemos inclusão, representatividade e acesso à tecnologia de forma humana e
                  transformadora.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CONTATO */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto bg-pink-50 border border-pink-100 rounded-[2rem] p-8 md:p-12">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
                Entre em contato
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-black text-gray-800">
                Faça parte do Elas++
              </h2>

              <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Quer participar das nossas iniciativas, apoiar o projeto ou conversar com a equipe?
                Vamos adorar falar com você.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-10">
              {/* EMAIL */}
              <a
                href="mailto:elaspucm@gmail.com"
                className="group bg-white rounded-3xl p-6 border border-pink-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-pink-100 text-pink-500 flex items-center justify-center">
                  <MailboxIcon size={22} weight="fill" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-800">E-mail</h3>

                <p className="mt-2 text-gray-600 text-sm">
                  Entre em contato diretamente com nossa equipe.
                </p>

                <span className="mt-4 inline-block text-primary font-semibold transition-transform">
                  elaspucm@gmail.com
                </span>
              </a>

              {/* EVENTOS */}
              <Link
                href="/Eventos"
                className="group bg-white rounded-3xl p-6 border border-pink-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-pink-100 text-pink-500 flex items-center justify-center">
                  <DesktopIcon size={22} weight="fill" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-800">Eventos Tech</h3>

                <p className="mt-2 text-gray-600 text-sm">
                  Conheça nossas atividades e eventos voltados para tecnologia.
                </p>

                <span className="mt-4 inline-block text-primary font-semibold transition-transform">
                  Explorar eventos
                </span>
              </Link>

              {/* COMUNIDADE */}
              <Link
                href="/Sobre"
                className="group bg-white rounded-3xl p-6 border border-pink-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-pink-100 text-pink-500 flex items-center justify-center">
                  <UsersThree size={22} weight="fill" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-800">Comunidade</h3>

                <p className="mt-2 text-gray-600 text-sm">
                  Saiba mais sobre o projeto e nossa missão dentro da tecnologia.
                </p>

                <span className="mt-4 inline-block text-primary font-semibold transition-transform">
                  Conhecer projeto
                </span>
              </Link>
            </div>
          </div>
        </section>
        <Apoiadores />

        <Footer />
      </div>
    </div>
  )
}
