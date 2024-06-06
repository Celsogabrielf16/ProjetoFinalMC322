export abstract class Midia {

    private id: number;
    private titulo: string;
    private anoLancamento: number;
    private faixaEtaria: number;
    private mediaAvaliacao: number;
    private elenco: Elenco;
    private categorias: Array<Categoria>;
    private avaliacoes: Array<Avaliacao>;
    private urlImagem: string;
    private urlBanner: string;

    constructor (id: number, titulo: string, anoLancamento: number,
            faixaEtaria: number, mediaAvalicao: number, elenco: Elenco,
            categorias: Array<Categoria>, avaliacoes: Array<Avaliacao>,
            urlImagem: string
    ) {
        this.id = id;
        this.titulo = titulo;
        this.anoLancamento = anoLancamento;
        this.faixaEtaria = faixaEtaria;
        this.mediaAvaliacao = mediaAvalicao;
        this.elenco = elenco;
        this.categorias = categorias;
        this.avaliacoes = avaliacoes;
        this.urlImagem =  urlImagem;
    }

    listarCategorias(): string {
        if(this.categorias == null)
            return "Não há categorias (por enquanto)";

        else {
            for(categoria ) {

            }
            return ;
        }
    }


    getID(): number {
        return this.id;
    }

    getTitulo(): string {
        return this.titulo;
    }

    getAnoLancamento(): number {
        return this.anoLancamento;
    }
 
    getFaixaEtaria(): number {
        return this.faixaEtaria;
    }

    getMediaAvaliacao(): number {
        return this.mediaAvaliacao;
    }

    getElenco(): Elenco {
        return this.elenco;
    }

    getCategorias(): Array<Categoria> {
        return this.categorias;
    }

    getavaliacoes(): Array<Avaliacao> {
        return this.avaliacoes;
    }

    getUrlImagem(): string {
        return this.urlImagem;
    }

    getUrlBanner(): string {
        return this.urlBanner;
    }
}