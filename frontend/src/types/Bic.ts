export default interface BicType {
  selector: any;
  dispatch: any;

  bicClick(): void;
  bicExplode(): void;
  bicEnough(): void;
}

export type UpgradeType = {
  type: "clickBase" | "multiplier";
  value: number;
} 

export interface ClickState {
  money: number,
  multiplicador: number,
  bonus: boolean,
  clickBase: number,
}
