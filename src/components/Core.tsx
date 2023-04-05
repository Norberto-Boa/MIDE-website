import Snap from ".././assets/snap.svg";
import Support from ".././assets/customer-support.svg";
import Credit from ".././assets/wallet.svg";

const Core = () => {
  return (
    <div
      className="max-w-5xl flex justify-between mx-auto py-36 bg-white"
    >

      <div
        className="w-full flex justify-between gap-8"
      >

        <div className="flex items-center gap-4 w-1/3 relative pb-8 group">
          <img
            src={Snap}
            alt="easy"
            className="h-12 w-12 fill-greenLogo"
          />

          <div
          >
            <h4
              className="text-xl font-medium text-greenLogo mb-1"
            >
              Garantias mais simples
            </h4>
            <span
              className="leading-none text-zinc-800 text-base"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit repellat iure.
            </span>
          </div>
          <span className="bg-zinc-300 w-full h-[2px] absolute bottom-0">
              <span className="absolute h-[2px] w-0 left-1/2 -translate-x-1/2 group-hover:bg-greenLogo group-hover:w-1/4 transition-all duration-700"></span>
          </span>
        </div>


        <div className="flex items-center gap-4 w-1/3 relative pb-8 group">
          <img
            src={Support}
            alt="easy"
            className="h-12 w-12 fill-greenLogo"
          />

          <div
          >
            <h4
              className="text-xl font-medium text-greenLogo mb-1"
            >
              Atendimento personalizado
            </h4>
            <span
              className="leading-none text-zinc-800 text-base"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit repellat iure.
            </span>
          </div>
          <span className="bg-zinc-300 w-full h-[2px] absolute bottom-0">
              <span className="absolute h-[2px] w-0 left-1/2 -translate-x-1/2 group-hover:bg-greenLogo group-hover:w-1/4 transition-all duration-700"></span>
          </span>
        </div>


        <div className="flex items-center gap-4 w-1/3 relative pb-8 group">
          <img
            src={Credit}
            alt="easy"
            className="h-12 w-12 fill-greenLogo"
          />

          <div
          >
            <h4
              className="text-xl font-medium text-greenLogo mb-1"
            >
              Credito flexivel
            </h4>
            <span
              className="leading-none text-zinc-800 text-base"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit repellat iure.
            </span>
          </div>
          <span className="bg-zinc-300 w-full h-[2px] absolute bottom-0">
              <span className="absolute h-[2px] w-0 left-1/2 -translate-x-1/2 group-hover:bg-greenLogo group-hover:w-1/4 transition-all duration-700"></span>
          </span>
        </div>


      </div>

    </div>
  )
}

export {Core};