abstract class Pessoa {

    private _nome: string;
    private _idade: number;

    constructor(nome: string, idade: number) {
        
        this._nome = nome;
        this._idade = idade;
    }

    // Getter para nome

    public get nome(): string {
        return this._nome;
    }

    // Setter para nome

    public set nome(nome: string) {
        this._nome = nome;
    }

    // Getter para idade

    public get idade(): number {
        return this._idade;
    }

    // Setter para idade

    public set idade(idade: number) {
        this._idade = idade;
    }
}
