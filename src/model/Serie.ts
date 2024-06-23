import Midia from "./Midia.js";
import Avaliacao from "./Avaliacao.js"
import {Categoria} from "./Categorias.js"
import Elenco from "./Elenco.js"
import Diretor from "./Diretor.js"

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