export default abstract class Pessoa {

    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    /**
     * Obtém o nome da pessoa.
     * @returns O nome da pessoa.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define um novo nome para a pessoa.
     * @param nome - O novo nome da pessoa.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }
}