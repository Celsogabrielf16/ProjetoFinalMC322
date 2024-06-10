class AvaliacaoController {
    
    private avaliacao: Avaliacao;
    private avalicaoView: AvalicaoView;

    constructor(avaliacaoRecebida: Avaliacao) {
        this.avaliacao = avaliacaoRecebida;
        this.avalicaoView = new AvaliacaoView();
    }

}