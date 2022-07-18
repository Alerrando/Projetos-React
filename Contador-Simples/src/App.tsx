import { useState } from "react";

export function App() {
  const [cont, setCont] = useState<number>(0);

  function Incrementar(){
    setCont(cont + 1)
  }

  function Resetar(){
    setCont(0)
  }

  function Decrementar(){
    setCont(cont - 1)
  }

  return (
    <div className="h-56 w-full flex justify-center items-start">
      <div className="text-center">

        <div className="text-zinc-100 mt-10">
          <h1 className="text-6xl mb-16">Contador</h1>
          <span className="text-6xl text-teal-400">{cont}</span>
        </div>

        <div className="gap-4 mt-16 text-xl font-bold">
          <button 
            onClick={Decrementar}
            className="py-3 px-12 mr-5 text-zinc-100 border-4 border-solid rounded-xl bg-transparent border-red-600 hover:border-blue-700"
          >
            Decrementar
          </button>

          <button 
            onClick={Resetar}
            className="py-3 px-12 mr-5 text-zinc-100 border-4 border-solid rounded-xl bg-transparent border-red-600 hover:border-blue-700"
          >
            Resetar
          </button>

          <button
            onClick={Incrementar}
            className="py-3 px-12 mr-5 text-zinc-100 border-4 border-solid rounded-xl bg-transparent border-red-600 hover:border-blue-700"
          >
            Aumentar
          </button>
        </div>
      </div>

    </div>
  )
}