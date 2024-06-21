import { Midia } from "./Midia"; 

export class Filme extends Midia {
    
    private diretor: Diretor;
    private duracao: number;

    constructor (id: number, titulo: string, anoLancamento: number,
        faixaEtaria: number, mediaAvalicao: number, elenco: Elenco,
        categorias: Array<Categoria>, avaliacoes: Array<Avaliacao>,
        urlImagem: string, diretor: Diretor, duracao: number) {

        super(id, titulo, anoLancamento, faixaEtaria, mediaAvalicao, elenco, 
            categorias, avaliacoes, urlImagem);
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