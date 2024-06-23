import { Midia } from "./Midia";
import { Avaliacao } from "./Avaliacao"
import { Categoria } from "./Categorias"
import { Elenco } from "./Elenco"
import { Diretor } from "./Diretor"

export class Filme extends Midia {
    
    private diretor: Diretor;
    private duracao: number;

    constructor (id: number, titulo: string, sinopse: string, anoLancamento: number,
        faixaEtaria: string, elenco: Elenco, categorias: Array<Categoria>, 
        avaliacoes: Array<Avaliacao>, imagemCapa: string, imagemBanner:string,
        imagemLogo: string, diretor: Diretor, duracao: number) {

        super(id, titulo, sinopse, anoLancamento, faixaEtaria, elenco, categorias,
            avaliacoes, imagemCapa, imagemBanner, imagemLogo);
        this.diretor = diretor;
        this.duracao = duracao;
    }

    public getDiretor() {
        return this.diretor;
    }

    public getDuracao() {
        return this.duracao;
    }
}