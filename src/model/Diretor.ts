class Diretor extends Pessoa {

    private sobre: string;

    constructor(sobre: string, nome: string, idade: number) {
        
        super(nome, idade);
        this.sobre = sobre;
    }

     // Getter para o sobre

     public get sobre(): string {
        return this._sobre;
    }

    // Setter para o sobre

    public set sobre(sobre: string) {
        this._sobre = sobre;
    }

}