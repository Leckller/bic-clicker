export default interface BicType {

  multiplier: number;
  clickBase: number;
  bicPaint: number;
  bonus: boolean;

  bicClick(): void;
  bicExplode(): void;
  bicEnough(): void;
  multiplierUpgrade(upgrade: UpgradeType): void;
}

export type UpgradeType = {
  type: "clickBase" | "multiplier";
  value: number;
} 