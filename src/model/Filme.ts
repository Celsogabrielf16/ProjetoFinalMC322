import Midia from "./Midia";
import Avaliacao from "./Avaliacao"
import {Categoria} from "./Categorias"
import Elenco from "./Elenco"
import Diretor from "./Diretor"

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