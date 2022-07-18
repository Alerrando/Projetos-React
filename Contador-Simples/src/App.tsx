import { useState } from "react";

export function App() {
  const [cont, setCont] = useState<number>(0);

  function Incrementar(){
    setCont(cont + 1)
  }

  function Discrementar(){
    setCont(cont - 1)
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="gap-4">
        <button 
          onClick={Incrementar}
          className="py-1 px-10 mr-5 text-zinc-100 bg-blue-700 hover:bg-blue-500"
        >
          +
        </button>
        <button
          onClick={Discrementar}
          className="py-1 px-10 text-zinc-100 bg-blue-700 hover:bg-blue-500"
        >
          -
        </button>
      </div>

      <div className="absolute text-xl mt-20 text-zinc-100">
        {cont}
      </div>
    </div>
  )
}