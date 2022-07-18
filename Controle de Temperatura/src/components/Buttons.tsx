import { Number } from "../App"

type ButtonsProps = {
    temperatura: Number
}

export function Buttons(props: ButtonsProps){
    return (
        <>
            {props.temperatura < 15 ? (
                <div className="w-52 h-52 border-[3px] border-b-gray-100 mt-4 mx-auto flex justify-center items-center rounded-full bg-blue-500">
                  <h1 className="text-3xl">
                    {`${props.temperatura}°C`}
                  </h1>
                </div>
              ): (
                <div className="w-52 h-52 border-[3px] border-b-gray-100 mt-4 mx-auto flex justify-center items-center rounded-full bg-orange-500">
                  <h1 className="text-3xl">
                    {`${props.temperatura}°C`}
                  </h1>
                </div>
              )}
        </>
    )
}