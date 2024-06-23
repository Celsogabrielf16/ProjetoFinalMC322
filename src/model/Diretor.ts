import Pessoa from "./Pessoa.js";

export default class Diretor extends Pessoa {

    private sobre: string;

    constructor(sobre: string, nome: string) {
        
        super(nome);
        this.sobre = sobre;
    }

    public getSobre(): string {
        return this.sobre;
    }

    public setSobre(sobre: string): void {
        this.sobre = sobre;
    }
}