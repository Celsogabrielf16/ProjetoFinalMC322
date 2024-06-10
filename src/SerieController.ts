class SerieController {

    private serie: Serie;
    private serieView: SerieView;

    constructor(serieRecebida: Serie) {
        this.serie = serieRecebida;
        this.serieView = new SerieView();
    }

}