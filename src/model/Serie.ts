import Midia from "./Midia";
import Avaliacao from "./Avaliacao"
import {Categoria} from "./Categorias"
import Elenco from "./Elenco"
import Diretor from "./Diretor"

export default class Serie extends Midia {

    private temporadas: string;
    private diretores: Array<Diretor>;

    constructor (id: number, titulo: string, sinopse: string, anoLancamento: number,
        faixaEtaria: string, elenco: Elenco, categorias: Array<Categoria>, 
        avaliacoes: Array<Avaliacao>, imagemCapa: string, imagemBanner:string,
        imagemLogo: string, temporadas: string, diretores: Array<Diretor>) {

        super(id, titulo, sinopse, anoLancamento, faixaEtaria, elenco, categorias,
            avaliacoes, imagemCapa, imagemBanner, imagemLogo);
        this.temporadas = temporadas;
        this.diretores = diretores;
    }

    public getTemporadas() {
        return this.temporadas;
    }

    public listarDiretores() {
        return this.diretores;
    }
}