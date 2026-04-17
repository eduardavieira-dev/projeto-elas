import { Title } from '../components/Title'

export default function Eventos() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="relative inline-block">
          <Title />
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-pink-300"></div>
        </div>
      </div>
    </section>
  )
}
