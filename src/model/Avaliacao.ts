export default abstract class Avaliacao {

    private notaAvaliacao: number;
    private dataAvaliacao: string;
    private comentario: string;
    private nomeUsuario: string;
    private idMidia: number;

    constructor (avaliacao: number, dataAvaliacao: string,
        comentario: string, nomeUsuario: string, idMidia: number) {
        this.notaAvaliacao = avaliacao;
        this.dataAvaliacao = dataAvaliacao;
        this.comentario = comentario;
        this.nomeUsuario = nomeUsuario;
        this.idMidia = idMidia;
    }

    public getNotaAvaliacao(): number {
        return this.notaAvaliacao;
    }

    public getDataAvaliacao(): string {
        return this.dataAvaliacao;
    }
 
    public getComentario(): string {
        return this.comentario;
    }

    public getNomeUsuario(): string {
        return this.nomeUsuario;
    }

    public getIDMidia(): number {
        return this.idMidia;
    }
}