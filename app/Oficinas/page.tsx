import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Title } from '../components/Title'
import oficinas from '@/data/oficinas.json'
import { CardOficina } from './_components/CardOficina.tsx/page'

export default function Oficinas() {
  return (
    <div>
        <Navbar />
      <section className="overflow-x-hidden">
        <div className="flex flex-col my-5 md:my-10 w-full">
          <section className="flex flex-col md:flex-row gap-6 justify-center md:gap-12 items-center max-w-2xl p-6 md:p-2 md:max-w-6xl mx-auto">
            <div className="mx-auto">
              <Title text="Oficinas" />
              <p>
                As oficinas do Elas++ são realizadas em escolas com temas diversos da computação. O
                propósito é atrair mais meninas que estão no ensino médio para a área da computação,
                apresentando conteúdos introdutórios e mostrando caminhos de formação e carreira. O
                público-alvo é majoritariamente composto por estudantes do ensino médio.
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dxwbd9xhy/image/upload/q_auto/f_auto/v1776448995/equipe_oficina_c_gf55jt.jpg"
              alt="oficina linguagem c"
              className="h-80 w-full sm:max-w-lg md:w-450 md:h-75 object-cover rounded-lg mx-auto"
            />
          </section>
          <section className="my-10 max-w-6xl mx-auto px-5 md:px-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
              Conheça nossas Oficinas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {oficinas.map((oficina) => (
                <CardOficina key={oficina.id} {...oficina} />
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </section>
    </div>
  )
}
