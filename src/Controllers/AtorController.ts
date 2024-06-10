class AtorController {

    private ator: Ator;
    private atorView: AtorView;

    constructor(atorRecebido: Ator) {
        this.ator = atorRecebido;
        this.atorView = new AtorView();
    }

}