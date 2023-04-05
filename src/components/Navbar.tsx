import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import Logo  from ".././assets/Logotipo-h.svg";


const Navigation = [
  {name: "Home", href: "hero"},
  {name: "Sobre-nós", href: "about"},
  {name: "Requisitos", href: "requirements"},
  {name: "Depoimentos", href: "testemonials"},
  {name: "Contactos", href: "contacts"},
]



const Navbar = () => {
  const [scroll, setScroll] = useState(false)  

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeBg();
    window.addEventListener('scroll', changeBg);
  })
  return (
    <div
      className={`${scroll  ? 'bg-black !border-none' : 'bg-transparent'} h-12 w-full fixed z-10 border-b-zinc-600 border-b-2 transition-all duration-700`}
    >
      <div
        className="max-w-5xl w-full flex justify-between items-center mx-auto h-full"
      >
        <div
          className="font-bold text-white"
        >
          <img src={Logo} alt="logotipo" className="w-40"/>
        </div>

        <div
          className="flex items-center gap-4"
        >
          {Navigation.map((item, i) => {
            return (
              <Link
                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold lead text-gray-100 hover:text-yellowLogo transition-all"
                key={i}
                to={item.href}
                spy={true} smooth={true} offset={-100} duration={1000}
              >
                {item.name}
              </Link>
            )            
          })}
          
        </div>
      </div>
    </div>
  )
}

export default Navbar