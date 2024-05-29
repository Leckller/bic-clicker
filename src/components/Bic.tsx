import { BicClass } from "./BicClass";

function Bic() {

  const bic = new BicClass();

  return (
    <>
      <div>
        <button
          onClick={() => {
            bic.bicClick()
          }}>
          CANETA AZUL
        </button>
      </div>
    </>
  )
}

export default Bic;