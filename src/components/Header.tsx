import { FormEvent, useEffect, useState } from "react"



const Header = () => {
  const [lending, setLending] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [payment, setPayment] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  function handlePercentage(months: number) {
    if (months > 0 && months < 3) {
      setPercentage(25);
    } else if (months >= 3 && months < 6) {
      setPercentage(30);
    } else if (months > 9 && months < 12) {
      setPercentage(35);
    } if (months === 0) {
      setPercentage(0)
    }
  }
  function handlePayment(loan : number, months : number) {
    const all = loan * (percentage / 100) + loan;
    const amortized = Math.round(all / months * 100) / 100;

    setPayment(amortized);
    setTotal(all);
    return all;
  };

  useEffect(() => {
    
    handlePercentage(months);
  },[months, lending])

  return (
    <div
      className="min-h-[85vh] bg-banner1 bg-cover bg-center relative w-full bg-fixed"
      id="hero"
    > 
      <span className="h-full w-full left-0 right-0 absolute bg-black/60" />

      <div
        className="absolute top-1/2 w-full -translate-y-1/2"
      >
        <div
          className="mx-auto max-w-5xl flex items-center justify-between"
        >
          <div className="w-2/5 flex flex-col gap-4">
            <h2 className="text-white font-black text-6xl">
              Precisas de algum <span className="text-yellowLogo">Tako?</span>
            </h2>
            <p className="text-white font-semibold text-xl">
              Nós temos a melhor <span className="text-greenLogo font-bold">solução</span> para o seu problema!
            </p>
          </div>

          <div className="w-2/5 flex flex-col bg-zinc-200 h-92 rounded-2xl justify-between">
            <h2 className="text-center font-bold text-3xl pt-4">Simular credito</h2>

            <div className="px-4 mt-4 ">
              <div className="flex gap-2 justify-between items-center">
                <label htmlFor="lending" className="font-semibold font-sans">Quanto precisas:</label>
                <input
                  type="number"
                  id="lending"
                  className=" w-3/6 rounded-md text-lg focus-visible:outline-none px-2 text-zinc-600 font-medium font-sans placeholder:text-zinc-400 text-end"
                  placeholder="50.000 MT"
                  value={lending}
                  onChange={event => setLending(parseInt(event.target.value))}
                  min={0}
                />
              </div>

              <div className="flex items-start gap-2 mt-2 justify-between">
                <label htmlFor="lending" className="font-semibold font-sans">Em quantos meses pretende pagar:</label>
                <input
                  type="number"
                  id="lending"
                  className=" w-16 rounded-md text-lg focus-visible:outline-none px-2 text-zinc-600 font-medium font-sans placeholder:text-zinc-400 text-end"
                  placeholder="5"
                  value={months}
                  onChange={event => setMonths(parseInt(event.target.value))}
                  min={0}
                />
              </div>
            </div>

            <span className="w-full h-[2px] bg-zinc-400/30"></span>

            <div className="px-4 mt-4 flex flex-col justify-between">

              <p className="font-medium text-lg">
                <span className="text-yellow-600">Percentagem: </span>
                <span className="text-greenLogo">{percentage}%</span>
              </p>

              <p className="font-medium text-lg">
                <span className="text-yellow-600">Valor a ser pago mensalmente: </span>
                <span className="text-greenLogo">{payment ? payment : 0} MT</span>
              </p>

              <p className="font-medium text-lg">
                <span className="text-yellow-600">Valor total:</span>
                <span className="text-greenLogo"> {total} MT</span>
              </p>

            </div>

            <div className="w-full flex items-center">
              <button
                onClick={() => handlePayment(lending, months)}
                type="button"
                className="w-[45%] mt-4 bg-yellowLogo mx-4 py-2 font-sans font-bold text-white rounded-lg mb-4 hover:bg-yellow-500 transition-all duration-500"
              >
                Simular empréstimo
              </button>
              
              <button
                type="submit"
                className="w-[45%] mt-4 bg-greenLogo mx-4 py-2 font-sans font-bold text-white rounded-lg mb-4 hover:bg-greenLogoHover transition-all duration-500"
              >
                Pedir empréstimo
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

  export default Header;