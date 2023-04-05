import Logo from "../assets/logo-v.svg";

const Contacts = () => {
  return (
    <div className="w-full py-20" id="contacts">
      <div className="max-w-5xl w-full mx-auto">
        <div
          className="flex items-center flex-col mt-10 w-full"
        >
          <img src={Logo} alt="logotipo" />

          <div
            className="flex justify-between mt-20 w-full"
          >
            <div className="w-56 flex flex-col items-center">
              <h4 className="text-greenLogo font-semibold text-center mb-4">Enderenço:</h4>
              <span className="text-center text-zinc-600">
                Matola-Rio, próximo a ponte, junto ao banco
              </span>
            </div>
 
            <div className="w-56 flex flex-col">
              <h4 className="text-greenLogo font-semibold text-center mb-4">Contactos:</h4>
              <span className="text-center text-zinc-600">
                +258 84 000 0000
              </span>

              <span className="text-center text-zinc-600">
                +258 84 000 0000
              </span>
            </div>
 
            <div className="w-56 flex flex-col items-center">
              <h4 className="text-greenLogo font-semibold text-center mb-4">Enderenço:</h4>
              <span className="text-center text-zinc-600">
                geral@mide.co.mz
              </span>

              <span className="text-center text-zinc-600">
                credito@mide.co.mz
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contacts };