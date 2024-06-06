import BicType, { ClickState, UpgradeType } from "../../types/Bic";
import { increment, toggleBonus, upgrade } from "../../redux/slices/clickSlice";
import { RootState } from "../../redux/store";
import { ProdutoClass } from "../loja/ProdutoClass";

export class BicClass implements BicType {

  bicPaint = 100;
  dispatch: any;
  selector: any;

  items: ProdutoClass[] = [];

  static localSave(status: RootState) {
    // Salva os dados atuais do jogador localmente
    localStorage.setItem("save", JSON.stringify(status));
  }

  adicionarItem(item: ProdutoClass): void {
      this.items.push(item)
  }

  setHooks(dispatch: any, selector: any) {
    this.dispatch = dispatch;
    this.selector = selector;
  }

  status(): ClickState {
    const store = this.selector as RootState;
    return store.clicks;
  }

  bicClick() {
    this.bicPaint -= 1;
    if (this.bicPaint <= 0) { this.bicEnough(); }

    const {bonus, clickBase, multiplicador} = this.status();

    const chanceToExplode = Math.floor(Math.random() * 100);
    if (bonus === false && (chanceToExplode > 0 && chanceToExplode < 20)) {
      this.bicExplode()
    }
    // Incrementa o dinheiro usando a multiplicação do click base com o multiplicador
    this.dispatch(increment(clickBase * multiplicador));
  }

  bicEnough(): void {
    const {clickBase, multiplicador} = this.status();
    // baseClick elevado ao multiplicador
    this.dispatch(increment((clickBase ** multiplicador) + 100));
    this.bicPaint = 100;
  }

  bicExplode(): void {
    console.log("bonus start")
    // Incrementa em 10x o multiplicador por 60 segundos
    this.dispatch(toggleBonus())

    setTimeout(() => {
    // Decrementa em 10x o multiplicador
    this.dispatch(toggleBonus())
      console.log("bonus end")
    }, 60000);
  }
}

export default new BicClass();