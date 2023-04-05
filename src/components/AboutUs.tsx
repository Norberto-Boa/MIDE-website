const AboutUs = () => {
  return (
    <div className="bg-zinc-200/30 min-h-[500px] w-full flex items-center" id="about">
      <div className="max-w-5xl mx-auto">
        

        <div className="flex justify-between w-full">

          <div className=" flex flex-col justify-between items-start w-[45%]">
            <div className="min-w-[100%] rounded-3xl bg-yellowLogo font-semibold p-2 pl-4 mb-2 text-center">
              <span className="text-white">Legalidade</span>
            </div>

            <div className="min-w-[100%] rounded-3xl bg-greenLogo font-semibold p-2 pl-4 mb-2 text-center">
              <span className="text-white">Moralidade</span>
            </div>

            <div className="min-w-[100%] rounded-3xl bg-yellowLogo font-semibold p-2 pl-4 mb-2 text-center">
              <span className="text-white">Transparencia</span>
            </div>

            <div className="min-w-[100%] rounded-3xl bg-greenLogo font-semibold p-2 pl-4 mb-2 text-center">
              <span className="text-white">Transparencia</span>
            </div>

            <div className="min-w-[100%] rounded-3xl bg-yellowLogo font-semibold p-2 pl-4 text-center">
              <span className="text-white ">Satisfacao dos clientes</span>
            </div>

            
          </div>

          <div className="w-[45%]">
            <h2 className="font-medium text-3xl text-greenLogo mb-2">Sobre nós</h2>
            <p className="text-zinc-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              eligendi illo porro eum neque? Sint tenetur reiciendis earum
              exercitationem assumenda enim neque in ipsam, possimus similique
              numquam nobis vitae quo provident! Voluptatem odio, unde commodi
              vell!
              <ul className="mt-1">
                <li><span className="text-greenLogo">•</span> Processo mais agil</li>
                <li><span className="text-greenLogo">•</span> Processo mais agil</li>
                <li><span className="text-greenLogo">•</span> Processo mais agil</li>
                <li><span className="text-greenLogo">•</span> Processo mais agil</li>
              </ul>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export { AboutUs };