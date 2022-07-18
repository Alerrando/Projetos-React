import { useState } from "react";
import { Buttons } from "./components/Buttons";

export type Number = number;

export function App() {
  const [contTemperatura, setContTemperatura] = useState<Number>(0);

  function Incrementar(){
    setContTemperatura(contTemperatura + 1);

  }

  function Discrementar(){
    setContTemperatura(contTemperatura - 1);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[25rem] w-72 bg-blue-700 rounded-2xl">
          <Buttons temperatura={contTemperatura} />

        <div className="flex mt-10 justify-around items-center gap-4">
          <button 
            onClick={Incrementar}
            className="py-5 px-7 border-[3px] border-blue-100 rounded-full text-zinc-100 bg-zinc-800 hover:bg-zinc-600"
          >
            +
          </button>
          <button
            onClick={Discrementar}
            className="py-5 px-7 border-[3px] border-blue-100 rounded-full text-zinc-100 bg-zinc-800 hover:bg-zinc-600"
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}