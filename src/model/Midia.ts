import { Categoria } from "./Categorias"
import { Avaliacao } from "./Avaliacao"
import { Elenco } from "./Elenco"

export abstract class Midia {

    private id: number;
    private titulo: string;
    private sinopse: string;
    private anoLancamento: number;
    private faixaEtaria: string;
    private mediaAvaliacao: number;
    private elenco: Elenco;
    private categorias: Array<Categoria>;
    private avaliacoes: Array<Avaliacao>;
    private imagemCapa: string;
    private imagemBanner: string;
    private imagemLogo: string;
    
    constructor (id: number, titulo: string, sinopse: string, 
        anoLancamento: number, faixaEtaria: string, elenco: Elenco, categorias: Array<Categoria>, avaliacoes: Array<Avaliacao>,
        imagemCapa: string, imagemBanner: string, imagemLogo: string
    ) {
        this.id = id;
        this.titulo = titulo;
        this.anoLancamento = anoLancamento;
        this.faixaEtaria = faixaEtaria;
        this.mediaAvaliacao = this.calculaMediaDasAvaliacoes(avaliacoes);
        this.elenco = elenco;
        this.categorias = categorias;
        this.avaliacoes = avaliacoes;
        this.sinopse =  sinopse;
        this.imagemCapa = imagemCapa;
        this.imagemBanner = imagemBanner;
        this.imagemLogo = imagemLogo;
    }

    private calculaMediaDasAvaliacoes(avaliacoes: Array<Avaliacao>): number {
        let numeroDeAvaliacoes = avaliacoes.length;
        this.mediaAvaliacao = 0;

        for(let i = 0; i < avaliacoes.length; i++)
            this.mediaAvaliacao += avaliacoes[i].getNotaAvaliacao();

        // caso não tenha avaliações ainda
        if(avaliacoes.length == 0) {
            // isso evita o erro de divisão por zero
            numeroDeAvaliacoes = 1;
        }

        return this.mediaAvaliacao / numeroDeAvaliacoes;
    }


    // função listar categorias, que retorna o array de categorias inteiro
    // substitui o getCategorias
    public listarCategorias(): Array<Categoria> { 
        return this.categorias;
    }

    // função listar avaliações, que retorna o array de avaliações inteiro
    // susbtitui o getAvaliacao
    public listarAvaliacao(): Array<Avaliacao> {
        return this.avaliacoes;
    }


    adicionarAvaliacao(novaAvaliacao: Avaliacao) {
        this.avaliacoes.push(novaAvaliacao);
    }

    public getID(): number {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getSinopse(): string {
        return this.sinopse;
    }

    public getAnoLancamento(): number {
        return this.anoLancamento;
    }
 
    public getFaixaEtaria(): string {
        return this.faixaEtaria;
    }

    public getAvaliacoes(): Array<Avaliacao> {
        return this.avaliacoes;
    }

    public getMediaAvaliacao(): number {
        return this.mediaAvaliacao;
    }

    public getElenco(): Elenco {
        return this.elenco;
    }

    public getImagemCapa(): string {
        return this.imagemCapa;
    }

    public getImagemBanner(): string {
        return this.imagemBanner;
    }

    public getImagemLogo(): string {
        return this.imagemLogo;
    }
}