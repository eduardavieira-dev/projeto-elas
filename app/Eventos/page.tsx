import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Title } from '../components/Title'
import { CardEvento } from './_components/CardEvento'
import eventos from '@/data/eventos.json'
export default function Eventos() {
  const parsePtBrDate = (dateStr: string) => {
    // Esperado: dd/mm/aaaa
    const match = /^\s*(\d{1,2})\/(\d{1,2})\/(\d{4})\s*$/.exec(dateStr)
    if (!match) return null

    const day = Number(match[1])
    const month = Number(match[2])
    const year = Number(match[3])
    if (!day || !month || !year) return null

    const date = new Date(year, month - 1, day)
    // validação simples (evita 32/13/2025 virar outra data)
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
      return null
    }

    return date
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const eventosList = (eventos.eventos ?? []) as Array<{
    title: string
    date: string
    description: string
    imageUrl: string
    eventUrl: string
    location: string
  }>

  const eventosWithMeta = eventosList
    .map((evento) => {
      const parsedDate = parsePtBrDate(evento.date)
      const isEventPassed = parsedDate ? parsedDate.getTime() < today.getTime() : true
      return { ...evento, parsedDate, isEventPassed }
    })
    // se a data não der parse, joga para "passados" (e mantém no fim)
    .sort((a, b) => {
      const aTime = a.parsedDate?.getTime() ?? -Infinity
      const bTime = b.parsedDate?.getTime() ?? -Infinity
      return bTime - aTime
    })

  const upcomingEvents = eventosWithMeta
    .filter((e) => !e.isEventPassed)
    .sort((a, b) => (a.parsedDate?.getTime() ?? Infinity) - (b.parsedDate?.getTime() ?? Infinity))

  const pastEvents = eventosWithMeta
    .filter((e) => e.isEventPassed)
    .sort((a, b) => (b.parsedDate?.getTime() ?? -Infinity) - (a.parsedDate?.getTime() ?? -Infinity))

  return (
    <section>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="relative inline-block md:mt-10">
          <Title text="Eventos" />
          <p className="text-neutral-700 text-base md:text-lg">
            Os eventos que o projeto Elas++ promove e participa são momentos especiais para
            celebrar, aprender e compartilhar experiências. Aqui você encontrará informações sobre
            os próximos eventos, workshops e encontros que estamos organizando.
          </p>
        </div>
        <section className="flex flex-col justify-center items-center mt-8">
          <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">Próximos Eventos</h2>
          {upcomingEvents.length === 0 ? (
            <div className="text-center text-pink-400 max-w-3xl flex flex-col">
              <span>
                No momento não temos nenhum evento ativo. Volte mais tarde para conferir as
                novidades.
              </span>
              <span>⋆˚｡⋆୨୧⋆ ˚｡⋆</span>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:gap-5 justify-center mx-auto w-full max-w-md sm:max-w-md md:max-w-2xl lg:max-w-6xl">
              {upcomingEvents.map((evento) => (
                <CardEvento
                  key={`${evento.title}-${evento.date}`}
                  title={evento.title}
                  date={evento.date}
                  description={evento.description}
                  location={evento.location}
                  imageUrl={evento.imageUrl}
                  eventUrl={evento.eventUrl}
                  isEventPassed={false}
                />
              ))}
            </div>
          )}
        </section>
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold my-8 text-center">Eventos Passados</h2>
          <div
            id="cards"
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 md:gap-5 justify-center mx-auto w-full max-w-md sm:max-w-md md:max-w-2xl lg:max-w-6xl"
          >
            {pastEvents.map((evento) => (
              <CardEvento
                key={`${evento.title}-${evento.date}`}
                title={evento.title}
                date={evento.date}
                description={evento.description}
                location={evento.location}
                imageUrl={evento.imageUrl}
                eventUrl={evento.eventUrl}
                isEventPassed={true}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
