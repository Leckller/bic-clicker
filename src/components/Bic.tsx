import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import BicClass from "./BicClass";

function Bic() {
  const dispatch = useAppDispatch();
  const { money } = useAppSelector(state => state.clicks)
  BicClass.setDispatch(dispatch)

  return (
    <div>
      <button
        data-testid="bicButton"
        onClick={() => {
          BicClass.bicClick();
          console.log(BicClass)
        }}>
        CANETA AZUL
      </button>
      <h1 data-testid="moneyText">{money}</h1>
    </div>
  )
}

export default Bic;