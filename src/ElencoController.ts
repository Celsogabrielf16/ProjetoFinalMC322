class ElencoController {

    private elenco: Elenco;
    private elencoView: ElencoView;

    constructor(elencoRecebido: Elenco) {
        this.elenco = elencoRecebido;
        this.elencoView = new ElencoView();
    }

}