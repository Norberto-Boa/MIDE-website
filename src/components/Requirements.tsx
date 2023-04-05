import id from "../assets/id.svg";

const Requirements = () => {
  return (
    <div className="w-full min-h-[350px] bg-banner2 bg-cover bg-center bg-fixed relative" id="requirements">
      <span className="absolute left-0 top-0 w-full h-full bg-black/60 z-0"/>

      <div className="max-w-5xl w-full absolute left-1/2 -translate-x-1/2 top-8">
        <h4 className="text-yellowLogo text-center text-3xl font-medium mb-12">
          Requisitos
        </h4>

        <div className="flex justify-between h-full items-center">

          <div className="flex gap-4 w-72 flex-col items-center">
            <img
              src={id}
              alt="BI"
              className="w-14 h-14 !fill-white"
            />
            <div className="text-center">
              <h2 className="font-medium text-yellowLogo leading-tight">Cópia do BI</h2>
              <span className="text-zinc-200 leading-tight">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nemo?</span>
            </div>
          </div>

          <div className="flex gap-4 w-72 flex-col items-center">
            <img
              src={id}
              alt="BI"
              className="w-14 h-14 !fill-white"
            />
            <div className="text-center">
              <h2 className="font-medium text-yellowLogo leading-tight">Cópia do BI da testemunha</h2>
              <span className="text-zinc-200 leading-tight">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nemo?</span>
            </div>
          </div>

          <div className="flex gap-4 w-72 flex-col items-center">
            <img
              src={id}
              alt="BI"
              className="w-14 h-14 !fill-white"
            />
            <div className="text-center">
              <h2 className="font-medium text-yellowLogo leading-tight">Factura de água ou energia</h2>
              <span className="text-zinc-200 leading-tight">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nemo?</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export { Requirements };