export function Apoiadores() {
  return (
    <div className="py-8 flex pt-2 flex-col mx-auto justify-center items-center gap-8 max-w-6xl px-5 md:px-3">
      <h2 className="text-center text-2xl md:text-3xl font-bold">Nossos Apoiadores</h2>
      <div id="empresas" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-auto px-5 md:p-2 items-stretch justify-center">
        <div className="max-w-md w-full h-full flex flex-col bg-soft-primary/50 border border-soft-primary rounded-md">
          <div className="bg-white py-3 rounded-t-md">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/94/Logo_SBC_Transparente.jpeg"
              className="h-40 mx-auto object-contain"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 my-3 p-3 flex-1">
            <h3 className="text-xl">Sociedade Brasileira de Computação</h3>
            <p className="text-sm">
              Sociedade científica sem fins lucrativos,que congrega estudantes, professores,
              pesquisadores e profissionais da área de Computação e Informática de todo o
              Brasil. Apoiador do projeto.
            </p>
          </div>
        </div>
        <div className="max-w-md w-full h-full flex flex-col bg-soft-primary/50 border border-soft-primary rounded-md">
          <div className="bg-black py-3 rounded-t-md">
            <img
              src="https://www.sydle.com/images/og-image-wide.png"
              className="h-40 mx-auto object-contain"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 my-3 p-3 flex-1">
            <h3 className="text-xl">Sydle</h3>
            <p className="text-sm lg:pt-6">
             Empresa brasileira de tecnologia especializada em transformação digital.Patrocina eventos,workshops e iniciativas que promovem a inclusão digital.
            </p>
          </div>
        </div>
        <div className="max-w-md w-full h-full flex flex-col bg-soft-primary/50 border border-soft-primary rounded-md">
          <div className="bg-white py-3 rounded-t-md">
            <img
              src="https://res.cloudinary.com/dxwbd9xhy/image/upload/q_auto/f_auto/v1776446149/meninas-digitais_b3k6o9.png"
              className="h-40 mx-auto object-contain"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 my-3 p-3 flex-1">
            <h3 className="text-xl">Meninas Digitais</h3>
            <p className="text-sm">
              O projeto Elas++ é vincualado ao programa da Sociedade Brasileira de Computação (SBC) que visa aumentar a participação feminina em áreas de tecnologia, como a computação, por meio de ações que despertam o interesse e motivam meninas e adolescentes a seguir carreira nessas áreas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
