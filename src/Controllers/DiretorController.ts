class DiretorController {

    private diretor: Diretor;
    private diretorView: DiretorView;

    constructor(diretorRecebido: Diretor) {
        this.diretor = diretorRecebido;
        this.diretorView = new DiretorView();
    }

    /**
     * Obtém o nome do diretor.
     * @returns O nome do diretor.
     */
    public getNome(): string {
        return this.diretor.getNome();
    }

    /**
     * Obtém a idade do diretor.
     * @returns A idade do diretor.
     */
    public getIdade(): number {
        return this.diretor.getIdade();
    }

    /**
     * Obtém informações adicionais sobre o diretor.
     * @returns Informações adicionais sobre o diretor.
     */
    public getSobre(): string {
        return this.diretor.getSobre();
    }
}