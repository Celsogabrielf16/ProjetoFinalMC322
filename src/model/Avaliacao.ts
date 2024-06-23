import { Usuario } from "./Usuario"

export abstract class Avaliacao {

    private id: number;
    private notaAvaliacao: number;
    private dataAvaliacao: string;
    private comentario: string;
    private usuario: Usuario;

    constructor (id: number, avaliacao: number, dataAvaliacao: string,
        comentario: string, usuario: Usuario
    ) {
        this.id = id;
        this.notaAvaliacao = avaliacao;
        this.dataAvaliacao = dataAvaliacao;
        this.comentario = comentario;
        this.usuario = usuario;
    }

    public getID(): number {
        return this.id;
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

    public getUsuario(): Usuario {
        return this.usuario;
    }
}