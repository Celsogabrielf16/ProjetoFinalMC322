class SerieController {

    private serie: Serie;
    private serieView: SerieView;

    constructor(serieRecebida: Serie) {
        this.serie = serieRecebida;
        this.serieView = new SerieView();
    }

    /**
     * Obtém o ID da serie.
     * @returns O ID da serie.
     */
    public getId(): number {
        return this.serie.getID();
    }

    /**
     * Obtém o título da serie.
     * @returns O título da serie.
     */
    public getTitulo(): string {
        return this.serie.getTitulo();
    }

    /**
     * Obtém a sinopse da serie.
     * @returns A sinopse da serie.
     */
    public getSinopse(): string {
        return this.serie.getSinopse();
    }

    /**
     * Obtém o ano de lançamento da serie.
     * @returns O ano de lançamento da serie.
     */
    public getAnoLancamento(): number {
        return this.serie.getAnoLancamento();
    }

    /**
     * Obtém a faixa etária da serie.
     * @returns A faixa etária da serie.
     */
    public getFaixaEtaria(): number {
        return this.serie.getFaixaEtaria();
    }

    /**
     * Obtém a média das avaliações da serie.
     * @returns A média das avaliações da serie.
     */
    public getMediaAvaliacao(): number {
        return this.serie.getMediaAvaliacao();
    }

    /**
     * Obtém o elenco da serie.
     * @returns O elenco da serie.
     */
    public getElenco(): Elenco {
        return this.serie.getElenco();
    }

    /**
     * Obtém a URL da imagem de capa da serie.
     * @returns A URL da imagem de capa da serie.
     */
    public getUrlImagem(): string {
        return this.serie.getUrlImagem();
    }
    
    /**
     * Obtém as temporadas da serie.
     * @returns As temporadas da serie.
     */
    public getTemporadas(): number {
        return this.serie.getTemporadas();
    }

    
    /**
     * Lista as avaliações da serie.
     */
    public listarAvaliacoes(): void {
        let avaliacoes: Array<Avaliacao> = this.serie.listarAvaliacoes();
        this.serieView.listarAvaliacoes(avaliacoes);
    }

    /**
     * Lista as categorias da serie.
     */
    public listarCategorias() {
        let categorias: Array<Categoria> = this.serie.listarCategorias();
        this.serieView.listarCategorias(categorias);
    }

    /**
     * Adiciona uma avaliação à serie.
     * @param id ID da avaliação.
     * @param notaAvaliacao Nota atribuída à avaliação.
     * @param dataAvaliacao Data da avaliação.
     * @param comentario Comentário da avaliação.
     * @param usuario Usuário que está realizando a avaliação.
     */
    public adicionarAvaliacao(id: number, notaAvaliacao: number, dataAvaliacao: string, comentario: string, usuario: Usuario): void {
        let avaliacao: Avaliacao = this.serie.criarAvaliacao(id, notaAvaliacao, dataAvaliacao, comentario, usuario);
        this.serie.adicionarAvaliacao(avaliacao);
    }

    /**
     * Lista os diretores da serie.
     */
    public listarDiretores() {
        let diretores: Array<Diretor> = this.serie.listarDiretores();
        this.serieView.listarDiretores(diretores);
    }

}