const Footer = () => {
  return (
    <div
      className="w-full bg-greenLogo "
    >
      <div
        className="max-w-5xl w-full flex justify-between mx-auto h-16 items-center text-zinc-200 font-semibold"
      >
        <span>&#169; Copyright 2023, MIDE Microcredito, todos direitos reservados</span>
        <span>Developed by <a className="cursor-pointer">AnyTech Solutions</a></span>
      </div>
    </div>
  )
}

export { Footer };