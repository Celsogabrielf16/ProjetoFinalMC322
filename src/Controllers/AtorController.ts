class AtorController {

    private ator: Ator;
    private atorView: AtorView;

    /**
     * Construtor da classe AtorController.
     * @param atorRecebido O ator a ser controlado por este controlador.
     */
    constructor(atorRecebido: Ator) {
        this.ator = atorRecebido;
        this.atorView = new AtorView();
    }

    /**
     * Obtém o nome do ator.
     * @returns O nome do ator.
     */
    public getNome(): string {
        return this.ator.getNome();
    }

    /**
     * Obtém a idade do ator.
     * @returns A idade do ator.
     */
    public getIdade(): number {
        return this.ator.getIdade();
    }

    /**
     * Obtém o papel desempenhado pelo ator.
     * @returns O papel desempenhado pelo ator.
     */
    public getPapel(): string {
        return this.ator.getPapel();
    }
}
