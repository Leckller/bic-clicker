import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import BicClass from "./BicClass";
import canetaAzul from '../../assets/azul-caneta.jpg'

function Bic() {
  const dispatch = useAppDispatch();
  const { money } = useAppSelector(state => state.clicks)
  BicClass.setDispatch(dispatch)

  return (
    <div
      className="w-[100%] md:w-[33%] bg-slate-400
      flex flex-col justify-between text-center pt-10 pb-10">

      <h2
        data-testid="moneyText"
        className="h-10 flex items-center justify-center bg-black text-white"
      >
        {`${money} canetas`}
      </h2>

      <button
        className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 flex justify-center"
        data-testid="bicButton"
        onClick={() => {
          BicClass.bicClick();
        }}>
        <img
          className="w-4/6 rounded-full"
          src={canetaAzul} alt="canetaAzul"
        />
      </button>

      <div />
    </div>
  )
}

export default Bic;