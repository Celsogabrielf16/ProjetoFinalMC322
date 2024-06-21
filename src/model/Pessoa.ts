abstract class Pessoa {

    private _nome: string;

    constructor(nome: string) {

        this._nome = nome;
    }

    // Getter para nome

    public get nome(): string {
        return this._nome;
    }

    // Setter para nome

    public set nome(nome: string) {
        this._nome = nome;
    }

}
