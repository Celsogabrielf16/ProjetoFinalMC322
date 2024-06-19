class Ator extends Pessoa {

    private papel: string;

    constructor(papel: string, nome: string, idade: number) {
        
        super(nome, idade);
        this.papel = papel;
    }

     // Getter para papel

     public get papel(): string {
        return this._papel;
    }

    // Setter para papel

    public set papel(papel: string) {
        this._papel = papel;
    }

}