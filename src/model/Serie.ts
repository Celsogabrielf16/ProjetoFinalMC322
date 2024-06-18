import { Midia } from "./Midia";

export class Serie extends Midia {

    private temporadas: number;
    private diretores: Array<Diretor>;

    constructor (id: number, titulo: string, anoLancamento: number,
        faixaEtaria: number, mediaAvalicao: number, elenco: Elenco,
        categorias: Array<Categoria>, avaliacoes: Array<Avaliacao>,
        urlImagem: string, temporadas: number, diretores: Array<Diretor>) {
        
            super(id, titulo, anoLancamento, faixaEtaria, mediaAvalicao, elenco, 
                categorias, avaliacoes, urlImagem);
            
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