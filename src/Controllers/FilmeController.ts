class FilmeController {

    private filme: Filme;
    private filmeView: FilmeView;

    constructor(filmeRecebido: Filme) {
        this.filme = filmeRecebido;
        this.filmeView = new FilmeView();
    }

}