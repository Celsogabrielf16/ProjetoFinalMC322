export default class BaseDeMidiaController {
    private baseDeMidia: BaseDeMidia;
    private baseDeMidiaView: BaseDeMidiaView;

    constructor(baseDeMidiaRecebido: BaseDeMidia) {
        this.baseDeMidia = BaseDeMidia.getInstancia();
        this.baseDeMidiaView = new BaseDeMidiaView();
    }
}