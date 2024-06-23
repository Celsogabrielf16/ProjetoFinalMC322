import Midia from "./Midia.js";
import Avaliacao from "./Avaliacao.js"
import {Categoria} from "./Categorias.js"
import Elenco from "./Elenco.js"
import Diretor from "./Diretor.js"

export default class Filme extends Midia {
    
    private diretor: Diretor;
    private duracao: string;

    constructor (id: number, titulo: string, sinopse: string, anoLancamento: number,
        faixaEtaria: string, elenco: Elenco, categorias: Array<Categoria>, 
        avaliacoes: Array<Avaliacao>, imagemCapa: string, imagemBanner:string,
        imagemLogo: string, diretor: Diretor, duracao: string) {

        super(id, titulo, sinopse, anoLancamento, faixaEtaria, elenco, categorias,
            avaliacoes, imagemCapa, imagemBanner, imagemLogo);
        this.diretor = diretor;
        this.duracao = duracao;
    }

    public getDiretor(): Diretor {
        return this.diretor;
    }

    public getDuracao(): string {
        return this.duracao;
    }
}