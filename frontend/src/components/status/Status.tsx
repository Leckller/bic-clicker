import { useAppSelector } from "../../hooks/reduxHooks"

function Status() {
  const { popup: {status}, clicks: {bonus, multiplicador} } = useAppSelector(state => state);

  return (
    <div className={`${status ? "" : "hidden"} md:flex md:static md:w-[33%] absolute w-full h-full bg-white border`}>
      Status
      <div>
        <h2>{`Multiplicador: ${multiplicador}`}</h2>
        <h2 className="animate-bounce">{`${bonus ? "BONUS DE MULTIPLICADOR !!!" : ""}`}</h2>
      </div>
    </div>
  )
}

export default Status