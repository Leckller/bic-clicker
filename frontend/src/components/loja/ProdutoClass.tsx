// CPS === Click por segundo

import { BicClass } from "../Clicker/BicClass";

export class ProdutoClass {
    public preco: number;
    public multiplicador: number;
    public CPS: number;
    public passivo: boolean;
    protected clicker: BicClass;

    constructor(clicker: BicClass, preco: number, multiplicador: number, cps: number, passivo: boolean = false){
        this.preco = preco;
        this.CPS = cps;
        this.multiplicador = multiplicador;
        this.passivo = passivo;
        this.clicker = clicker
    }
    
    ativar(){
        if (this.passivo){
            
            return;
        }

    }

    melhorar(){
        
    }
}
