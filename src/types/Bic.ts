export default interface BicType {
  mult: number;

  bicClick(): void;
  bicExplode(): void;
  bicEnough(): void;
  multUpgrade(upgrade: number): void;
}