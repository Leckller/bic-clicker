import { useAppSelector } from "../../hooks/reduxHooks";

function Loja() {
  const { loja } = useAppSelector(state => state.popup);
  return (
    <div className={`${loja ? "" : "hidden"} md:flex md:static md:w-[33%] absolute w-full h-full bg-white`}>
      Loja
    </div>
  )
}

export default Loja