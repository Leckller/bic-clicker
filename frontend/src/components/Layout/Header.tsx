import { useAppDispatch } from "../../hooks/reduxHooks"
import { loja, status } from "../../redux/slices/popupSlice";

function Header() {
  const dispatch = useAppDispatch();
  return (
    <header className="flex flex-row items-center justify-around w-full">
      Header

      <button
        className="flex md:hidden"
        onClick={() => dispatch(status())}>
        Status
      </button>

      <button
        className="flex md:hidden"
        onClick={() => dispatch(loja())}>
        Loja
      </button>

    </header>
  )
}

export default Header