class ElencoController {

    private elenco: Elenco;
    private elencoView: ElencoView;

    /**
     * Construtor da classe ElencoController.
     * @param elencoRecebido O elenco a ser controlado por este controlador.
     */
    constructor(elencoRecebido: Elenco) {
        this.elenco = elencoRecebido;
        this.elencoView = new ElencoView();
    }

    /**
     * Lista os atores do elenco e os exibe na view associada.
     */
    public listarAtores(): void {
        let listaDeAtores: Array<Ator> = this.elenco.listarAtores();
        this.elencoView.listarAtores(listaDeAtores);
    }
}
