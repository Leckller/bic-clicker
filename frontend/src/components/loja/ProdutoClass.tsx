// CPS === Click por segundo

import { decrement, increment } from "../../redux/slices/clickSlice";
import { UpgradeType } from "../../types/Bic";
import BicClass  from "../Clicker/BicClass";

export class ProdutoClass {
    public nome: string;
    public preco: number;
    public multiplicador: UpgradeType;
    public CPS: number;
    public passivo: boolean;
    public level = 1;
    protected clicker = BicClass;

    constructor(nome: string, preco: number, multiplicador: UpgradeType, cps: number, passivo: boolean = false){
        this.nome = nome;
        this.preco = preco;
        this.CPS = cps;
        this.multiplicador = multiplicador;
        this.passivo = passivo;
    }
    
    ativar(){
        const pagamento = this.pagar();
        if(!pagamento){
            return;
        }
        
        if (this.passivo){
            setInterval(() => {
                this.clicker.dispatch(increment(this.CPS * this.clicker.multiplier));
            }, 1000)
            return;
        }
        this.clicker.multiplierUpgrade(this.multiplicador)
    }

    pagar(): boolean {
        if(this.clicker.getBics() < this.preco) {
            alert("Dinheiro insuficiente");
            return false;
        }
        this.clicker.dispatch(decrement(this.preco * (this.level * 0.2)));
        this.level += 1.2;
        return true;
    }

    melhorar(){
        const pagamento = this.pagar();
        if(!pagamento){
            return;
        }
        this.multiplicador.value *= 1.25;
    }
}
