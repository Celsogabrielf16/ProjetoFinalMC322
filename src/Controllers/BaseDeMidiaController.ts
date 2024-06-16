export default class BaseDeMidiaController {
    private baseDeMidia: BaseDeMidia;
    private baseDeMidiaView: BaseDeMidiaView;

    constructor(baseDeMidiaRecebido: BaseDeMidia) {
        this.baseDeMidia = BaseDeMidia.getInstancia();
        this.baseDeMidiaView = new BaseDeMidiaView();
    }

    /**
     * Método para iniciar a lista de Midia na base de Midia.
     */
    public iniciaListaMidia(){
        this.baseDeMidia.criaListaMidia();
    }

    /**
     * Método para salvar a lista de Midia.
     */
    public salvaListaMidia(){
        this.baseDeMidia.salvaListaMidia();
    }
}