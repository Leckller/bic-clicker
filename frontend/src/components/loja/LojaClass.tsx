import BicClass  from "../Clicker/BicClass";
import { ProdutoClass } from "./ProdutoClass";

export class LojaClass {
    produtos: ProdutoClass[] = [];
    clicker = BicClass;

    comprarProduto(produto: ProdutoClass) {
        this.clicker.adicionarItem(produto);
        produto.ativar();
    }
    
    encontrarProduto(produto:ProdutoClass) {
        return this.clicker.items.find(p => p.nome === produto.nome);
    }

    melhorarProduto(produto:ProdutoClass) {
        const query = this.encontrarProduto(produto);
        if(!query){
            alert("Você ainda não tem esse produto");
            return;
        }
        query.ativar();
    }
}

export default new LojaClass();