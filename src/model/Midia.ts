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


    // função listar categorias, que retorna o array de categorias inteiro
    // substitui o getCategorias
    listarCategorias(): Array<Categoria> { 
        return this.categorias;
    }

    // função listar avaliações, que retorna o array de avaliações inteiro
    // susbtitui o getAvaliacao
    listarAvaliacao(): Array<Avaliacao> {
        return this.avaliacoes;
    }


    // CLASSE INCOMPLETA IMPLEMENTAR O DESIGN PATTERNS OBSERVER NELA 
    criarAvaliacao(id: number,  notaAvaliacao: number, dataAvaliacao: string,
        comentario: string, usuario: Usuario
    ): Avaliacao {
    }

    /** ADICIONAR AVALICAO VAI CRIAR UMA AVALIACAO E DEPOIS USAR O DESIGN
     * PATTERNS PARA ABRIR O ARQUIVO E COLOCAR A AVALIAÇÃO LÁ 
     * AINDA PRECISA SER CONCLUIDA
     * --> ver se é filme ou série
     * --> abrir o arquivo
     * --> procurar pelo ID da mídia
     * --> adicionar na TAG avaliação, a avaliação criada
     */
    adicionarAvaliacao() {
    }

    public getID(): number {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAnoLancamento(): number {
        return this.anoLancamento;
    }
 
    public getFaixaEtaria(): number {
        return this.faixaEtaria;
    }

    public getMediaAvaliacao(): number {
        return this.mediaAvaliacao;
    }

    public getElenco(): Elenco {
        return this.elenco;
    }

    public getUrlImagem(): string {
        return this.urlImagem;
    }

    public getUrlBanner(): string {
        return this.urlBanner;
    }
}