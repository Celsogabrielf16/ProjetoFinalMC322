export abstract class Avaliacao {

    private id: number;
    private avaliacao: number;
    private dataAvaliacao: string;
    private comentario: string;
    private usuario: Usuario;

    constructor (id: number, avaliacao: number, dataAvaliacao: string,
        comentario: string, usuario: Usuario
    ) {
        this.id = id;
        this.avaliacao = avaliacao;
        this.dataAvaliacao = dataAvaliacao;
        this.comentario = comentario;
        this.usuario = usuario;
    }

    public getID(): number {
        return this.id;
    }

    public getAvaliacao(): number {
        return this.avaliacao;
    }

    public getDataAvaliacao(): string {
        return this.dataAvaliacao;
    }
 
    public getComentario(): string {
        return this.comentario;
    }

    public getUsuario(): Usuario {
        return this.usuario;
    }
}