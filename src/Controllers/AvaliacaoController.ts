class AvaliacaoController {
    
    private avaliacao: Avaliacao;
    private avaliacaoView: AvaliacaoView;

    /**
     * Construtor da classe AvaliacaoController.
     * @param avaliacaoRecebida A avaliação a ser controlada por este controlador.
     */
    constructor(avaliacaoRecebida: Avaliacao) {
        this.avaliacao = avaliacaoRecebida;
        this.avaliacaoView = new AvaliacaoView();
    }

    /**
     * Obtém o ID da avaliação.
     * @returns O ID da avaliação.
     */
    public getID(): number {
        return this.avaliacao.getID();
    }

    /**
     * Obtém a nota da avaliação.
     * @returns A nota da avaliação.
     */
    public getAvaliacao(): number {
        return this.avaliacao.getAvaliacao();
    }

    /**
     * Obtém a data da avaliação.
     * @returns A data da avaliação.
     */
    public getDataAvaliacao(): string {
        return this.avaliacao.getDataAvaliacao();
    }

    /**
     * Obtém o comentário da avaliação.
     * @returns O comentário da avaliação.
     */
    public getComentario(): string {
        return this.avaliacao.getComentario();
    }

    /**
     * Obtém o usuário que realizou a avaliação.
     * @returns O usuário que realizou a avaliação.
     */
    public getUsuario(): Usuario {
        return this.avaliacao.getUsuario();
    }
}
