import { useAppSelector } from "../../hooks/reduxHooks"
import BicClass from "../Clicker/BicClass";


function Status() {
  const { status } = useAppSelector(state => state.popup);

  return (
    <div className={`${status ? "" : "hidden"} md:flex md:static md:w-[33%] absolute w-full h-full bg-white border`}>
      Status
      <div>
        <h2>{`Multiplicador: ${BicClass.multiplier}`}</h2>
        <h2 className="animate-bounce">{`${BicClass.bonus ? "BONUS DE MULTIPLICADOR !!!" : ""}`}</h2>
      </div>
    </div>
  )
}

export default Status