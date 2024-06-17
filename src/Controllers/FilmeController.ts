class FilmeController {

    private filme: Filme;
    private filmeView: FilmeView;

    /**
     * Construtor da classe FilmeController.
     * @param filmeRecebido O filme a ser controlado por este controlador.
     */
    constructor(filmeRecebido: Filme) {
        this.filme = filmeRecebido;
        this.filmeView = new FilmeView();
    }

    /**
     * Lista as avaliações do filme.
     */
    public listarAvaliacoes(): void {
        let avaliacoes: Array<Avaliacao> = this.filme.listarAvaliacoes();
        this.filmeView.listarAvaliacoes(avaliacoes);
    }

    /**
     * Lista as categorias do filme.
     */
    public listarCategorias(): void {
        let categorias: Array<Categoria> = this.filme.listarCategorias();
        this.filmeView.listarCategorias(categorias);
    }

    /**
     * Adiciona uma avaliação ao filme.
     * @param id ID da avaliação.
     * @param notaAvaliacao Nota atribuída à avaliação.
     * @param dataAvaliacao Data da avaliação.
     * @param comentario Comentário da avaliação.
     * @param usuario Usuário que está realizando a avaliação.
     */
    public adicionarAvaliacao(id: number, notaAvaliacao: number, dataAvaliacao: string, comentario: string, usuario: Usuario): void {
        let avaliacao: Avaliacao = this.filme.criarAvaliacao(id, notaAvaliacao, dataAvaliacao, comentario, usuario);
        this.filme.adicionarAvaliacao(avaliacao);
    }

    /**
     * Obtém o ID do filme.
     * @returns O ID do filme.
     */
    public getId(): number {
        return this.filme.getID();
    }

    /**
     * Obtém o título do filme.
     * @returns O título do filme.
     */
    public getTitulo(): string {
        return this.filme.getTitulo();
    }

    /**
     * Obtém a sinopse do filme.
     * @returns A sinopse do filme.
     */
    public getSinopse(): string {
        return this.filme.getSinopse();
    }

    /**
     * Obtém o ano de lançamento do filme.
     * @returns O ano de lançamento do filme.
     */
    public getAnoLancamento(): number {
        return this.filme.getAnoLancamento();
    }

    /**
     * Obtém a faixa etária do filme.
     * @returns A faixa etária do filme.
     */
    public getFaixaEtaria(): number {
        return this.filme.getFaixaEtaria();
    }

    /**
     * Obtém a média das avaliações do filme.
     * @returns A média das avaliações do filme.
     */
    public getMediaAvaliacao(): number {
        return this.filme.getMediaAvaliacao();
    }

    /**
     * Obtém o elenco do filme.
     * @returns O elenco do filme.
     */
    public getElenco(): Elenco {
        return this.filme.getElenco();
    }

    /**
     * Obtém a URL da imagem de capa do filme.
     * @returns A URL da imagem de capa do filme.
     */
    public getUrlImagem(): string {
        return this.filme.getUrlImagem();
    }

    /**
     * Obtém o diretor do filme.
     * @returns O diretor do filme.
     */
    public getDiretor(): Diretor {
        return this.filme.getDiretor();
    }

    /**
     * Obtém a duração do filme.
     * @returns A duração do filme.
     */
    public getDuracao(): number {
        return this.filme.getDuracao();
    }
}
