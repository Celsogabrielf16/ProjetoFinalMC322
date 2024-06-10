class DiretorController {

    private diretor: Diretor;
    private diretorView: DiretorView;

    constructor(diretorRecebido: Diretor) {
        this.diretor = diretorRecebido;
        this.diretorView = new DiretorView();
    }

}