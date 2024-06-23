import Pessoa from "./Pessoa";

export default class Ator extends Pessoa {

    private papel: string;

    constructor(papel: string, nome: string) {
        
        super(nome);
        this.papel = papel;
    }

     public getPapel(): string {
        return this.papel;
    }

    public setPapel(papel: string):void {
        this.papel = papel;
    }
}