import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import CardExtensionista from './_components/CardExtensionista/page'
import HistorySlider from './_components/HistorySlider'
import { getMembersWithGithubData, MemberProfile, MemberRole } from '@/lib/members-data'

const SECTION_TITLES: Record<MemberRole, string> = {
  coordenadora: 'Coordenadoras',
  membra: 'Membras',
  'ex-membra': 'Ex-membras',
}

const POSITION_LABELS: Record<MemberRole, string> = {
  coordenadora: 'Coordenadora',
  membra: 'Extensionista',
  'ex-membra': 'Ex-extensionista',
}

function renderMemberCards(members: MemberProfile[]) {
  if (!members.length) {
    return <p className="text-center text-sm text-neutral-500">Nenhuma integrante cadastrada.</p>
  }

  return members.map((member) => (
    <CardExtensionista
      key={member.username}
      name={member.name}
      position={POSITION_LABELS[member.role]}
      description={member.description}
      imageUrl={member.photoUrl}
      linkedinUrl={member.socialLinks?.linkedin}
      githubUrl={member.githubUrl}
      instagramUrl={member.socialLinks?.instagram}
      websiteUrl={member.socialLinks?.portfolio}
    />
  ))
}

export default async function Sobre() {
  const members = await getMembersWithGithubData()
  const coordinators = members.filter((member) => member.role === 'coordenadora')
  const extensionistas = members.filter((member) => member.role === 'membra')
  const exExtensionistas = members.filter((member) => member.role === 'ex-membra')

  return (
    <div>
      <Navbar />
      <section className="flex flex-col max-w-5xl mx-auto">
        <div className="relative inline-block mb-8 text-center mt-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Sobre nós</h2>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-13.75 h-1.5 bg-pink-500 rounded-sm"></div>
        </div>
        <div className="px-5">
          <h3 className="text-xl font-bold md:text-2xl">Nossa História</h3>
          <p className="my-2">
            Conheça sobre como começou o projeto elas++ e a nossa história até aqui. Veja também as
            integrantes do projeto.
          </p>
        </div>
      </section>

      <HistorySlider />

      <section>
        <h2 className="text-center font-semibold text-2xl my-5">{SECTION_TITLES.coordenadora}</h2>
        <div
          id="coordenadoras"
          className="flex flex-wrap md:flex-nowrap gap-3 justify-center items-center mx-auto max-w-xl"
        >
          {renderMemberCards(coordinators)}
        </div>
        <div className="bg-soft-primary/50 py-3 my-10">
          <h2 className="text-center font-semibold text-2xl my-5">{SECTION_TITLES.membra}</h2>
          <div
            id="extensionistas"
            className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl lg:max-w-5xl lg:grid-cols-3 gap-3 max-w-4xl mx-auto mb-5"
          >
            {renderMemberCards(extensionistas)}
          </div>
        </div>
        <h2 className="text-center font-semibold text-2xl my-5">{SECTION_TITLES['ex-membra']}</h2>
        <div
          id="ex-extensionistas"
          className="grid grid-cols-1 md:grid-cols-2 md:max-w-2xl lg:max-w-5xl lg:grid-cols-3 gap-3 max-w-4xl mx-auto mb-5"
        >
          {renderMemberCards(exExtensionistas)}
        </div>
      </section>
      <Footer />
    </div>
  )
}
