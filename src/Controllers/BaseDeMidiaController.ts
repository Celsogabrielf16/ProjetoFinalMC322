class BaseDeMidiaController {

    private baseDeUsuario: BaseDeUsuario;
    private baseDeMidiaView: BaseDeMidiaView;

    constructor(baseDeMidiaRecebido: BaseDeMidia) {
        this.baseDeMidia = baseDeMidiaRecebido;
        this.baseDeMidiaView = new BaseDeMidiaoView();
    }

}