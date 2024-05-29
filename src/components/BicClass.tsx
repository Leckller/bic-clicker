import BicType from "../types/Bic";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { increment } from "../redux/slices/clickSlice";
import { RootState } from "../redux/store";

export class BicClass implements BicType {
  mult = 1;

  protected dispatch = useAppDispatch()
  protected rootStore = useAppSelector(state => state)

  static localSave(status: RootState) {
    localStorage.setItem("save", JSON.stringify(status));
  }

  multUpgrade(upgrade: number): void {
    this.mult += upgrade;
    BicClass.localSave(this.rootStore);
  }

  bicClick(): void {
    this.dispatch(increment(1))
    BicClass.localSave(this.rootStore);
  }

  bicEnough(): void {
    this.mult *= 10;

    setTimeout(() => {
      this.mult /= 10;
    }, 5000);


  }

  bicExplode(): void {

  }
}
