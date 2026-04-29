'use client'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import { Footer } from './components/Footer'
import { Apoiadores } from './components/Apoiadores'
import { Navbar } from './components/Navbar'
import { ArrowRightIcon } from '@phosphor-icons/react'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-4 py-8 pt-2 bg-primary text-white">
        <section className="flex flex-col max-w-6xl md:flex-row items-center gap-8 mx-auto my-12">
          <div className="p-5 md:p-1">
            <h1 className="text-4xl  font-poppins font-extrabold mb-6">Elas++</h1>
            <p className="mb-6 text-lg">
              O Elas++ é um projeto de extensão universitária da PUC Minas que visa aumentar a
              participação feminina na área de tecnologia.
            </p>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white rounded-sm translate-x-1 translate-y-1"></div>
              <a
                href="/Sobre"
                className="relative font-semibold border border-white py-2 px-4 rounded-sm hover:translate-x-1 hover:translate-y-1 ease-in-out  duration-200 bg-primary block"
              >
                Conheça nosso trabalho
              </a>
            </div>
          </div>
          <img src="elas.jpg" alt="" className="w-full rounded-xl px-6 md:w-120 md:px-1" />
        </section>
      </div>
      <section className="bg-pink-200 p-5 md:p-4">
        <ul className="justify-evenly flex text-pink-400/60 font-bold flex-wrap gap-4 px-8 text-md md:text-lg lg:text-xl">
          <li>Reconhecimento</li>
          <li>Inclusão</li>
          <li>Igualdade</li>
          <li>Representatividade</li>
        </ul>
      </section>
      <section className="flex flex-col justify-center text-center gap-4 max-w-3xl mx-auto p-5 my-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center">O que é o Elas++?</h2>
        <p className="text-md font-light">
          Nosso projeto é dedicado a transformar a maneira como as meninas enxergam e se envolvem
          com o universo da tecnologia.
        </p>
        <p className="text-md font-light">
          Estamos aqui para desmistificar o mundo da TI e mostrar que ele é um espaço para todas,
          independentemente de idade, origem ou experiência prévia.
        </p>
      </section>
      <hr className="border-t-.5 border-neutral-300 w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto my-8" />

      <section className="flex flex-col md:flex-row justify-center text-center md:text-left gap-8 max-w-6xl mx-auto p-5 my-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold">Nossa Missão</h2>
          <p>
            Nossa missão é empoderar e inspirar meninas a explorar e se apaixonar por áreas como
            programação, desenvolvimento de software, ciência de dados e muito mais.
          </p>
          <p>
            Através de oficinas interativas, tutoriais passo a passo e uma comunidade acolhedora,
            oferecemos as ferramentas e o suporte necessários para que cada participante possa
            desenvolver suas habilidades, ganhar confiança e descobrir novas oportunidades.
          </p>
          <p>
            Vamos juntas nessa jornada para criar um futuro onde a presença feminina na TI seja a
            regra, não a exceção!
          </p>
        </div>
        <img src="capa-linkedin.svg" className="p-8 md:p-1" alt="" />
      </section>

      <section className="bg-soft-primary/40 p-5 md:p-8">
        <div className="mx-auto grid max-w-5xl gap-6 rounded-2xl border border-primary/15 bg-white/85 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-2xl font-extrabold leading-tight text-pink-600/80 md:text-3xl">
              Sobre Nós
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
              Somos uma equipe apaixonada por tecnologia e por promover a diversidade no setor.
              Através de nossas oficinas, eventos e publicações, trabalhamos para criar
              oportunidades e derrubar barreiras que impedem a participação plena das mulheres na
              tecnologia.
            </p>

            <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">
              Desenvolvemos projetos inovadores, realizamos pesquisas relevantes e criamos redes de
              apoio que fortalecem a comunidade feminina tech.
            </p>

            <div className="mt-7 flex justify-center md:justify-start">
              <div className="relative inline-block w-full max-w-xs justify-center">
                <div className="absolute inset-0 bg-pink-500/40 rounded-sm translate-x-1 translate-y-1"></div>
                <a
                  href="/Sobre"
                  className="text-pink-500/80 relative text-center font-semibold border border-pink-300/80 py-2 px-4 rounded-sm hover:translate-x-1 hover:translate-y-1 ease-in-out  duration-200 bg-pink-50 block"
                >
                  Conheça nossa história
                </a>
              </div>
            </div>
          </div>

          <div className="grid items-start gap-3 sm:grid-cols-2 md:grid-cols-1">
            <div className="relative self-start h-fit">
              <div className="absolute inset-0 z-0 rounded-xl bg-pink-500/20 translate-x-1 translate-y-1"></div>
              <div className="relative z-10 rounded-xl border border-primary/20 bg-white p-4 text-left">
                <p className="font-semibold text-pink-600/80">Oficinas práticas</p>
                <p className="mt-1 text-sm text-slate-600">
                  Atividades mão na massa para aproximar mais mulheres da tecnologia.
                </p>
              </div>
            </div>
            <div className="relative self-start h-fit">
              <div className="absolute inset-0 z-0 rounded-xl bg-pink-500/20 translate-x-1 translate-y-1"></div>
              <div className="relative z-10 rounded-xl border border-primary/20 bg-white p-4 text-left">
                <p className="font-semibold text-pink-600/80">Eventos e conexão</p>
                <p className="mt-1 text-sm text-slate-600">
                  Encontros que criam troca real de experiências e ampliam oportunidades.
                </p>
              </div>
            </div>
            <div className="relative self-start h-fit sm:col-span-2 md:col-span-1">
              <div className="absolute inset-0 z-0 rounded-xl bg-pink-500/20 translate-x-1 translate-y-1"></div>
              <div className="relative z-10 rounded-xl border border-pink-200 bg-white p-4 text-left">
                <p className="font-semibold text-pink-600/80">Pesquisa e impacto</p>
                <p className="mt-1 text-sm text-slate-600">
                  Produção de conteúdo e iniciativas que fortalecem a comunidade feminina tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Apoiadores />

      {/*
      <section className=" flex flex-col gap-4 max-w-5xl mx-auto p-5 text-center">
        <h2 className="text-2xl font-bold">Junte-se a nós</h2>
        <p>
          Quer fazer parte desta transformação? Entre em contato conosco e descubra como você pode
          participar ou contribuir com o Elas++.
        </p>
        <div className="flex mx-auto">
          <div className="relative inline-block  max-auto w-50">
            <div className="absolute inset-0 bg-pink-400/90 rounded-sm translate-x-1 translate-y-1"></div>
            <a
              href="mailto:elaspucm@gmail.com"
              className="relative text-pink-500 font-semibold border border-pink-400/90 py-2 px-4 rounded-sm hover:translate-x-1 hover:translate-y-1 ease-in-out  duration-200 bg-white block"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>
      */}
      <Footer />
    </div>
  )
}
