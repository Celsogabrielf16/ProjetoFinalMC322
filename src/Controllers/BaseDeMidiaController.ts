import Diretor from './Diretor';
import BaseDeMidia from './BaseDeMidia';
import Avaliacao from './Avaliacao';
import Categoria from './Categoria';
import Elenco from './Elenco';
import Filme from './Filme';
import Serie from './Serie';

export default class BaseDeMidiaController {
    private baseDeMidia: BaseDeMidia;

    constructor(baseDeMidiaRecebido: BaseDeMidia) {
        this.baseDeMidia = BaseDeMidia.getInstancia();

    }

    /**
     * Método para iniciar a lista de Midia na base de Midia.
     */
    public iniciaListaMidia(){
        this.baseDeMidia.criaListaMidia();
    }

    /**
     * Método para salvar a lista de Midia.
     */
    public salvaListaMidia(){
        this.baseDeMidia.salvaListaMidia();
    }

    /**
     * Lista os diretores da série.
     * @returns Todos os diretores da série.
     */
    public listarDiretores(id: number): Array<Diretor>{
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.listarDiretores();
    }

    /**
     * Lista as avaliações do filme ou série.
     */
    public listarAvaliacoes(id: number): Array<Avaliacao> {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.listarAvaliacoes();
    }

    /**
     * Lista as categorias do filme ou série.
     */
    public listarCategorias(id: number): Array<Categoria> {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.listarCategorias();
    }

    /**
     * Obtém as temporadas da serie.
     * @returns As temporadas da serie.
     */
    public getTemporadas(id: number): number {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getTemporadas();
    }

    /**
     * Obtém o diretor do filme.
     * @returns O diretor do filme.
     */
    public getDiretor(id: number): Diretor {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getDiretor();
    }

    /**
     * Obtém o título do filme ou série.
     * @returns O título do filme ou série.
     */
    public getTitulo(id: number): string {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getTitulo();
    }

    /**
     * Obtém a sinopse do filme ou série.
     * @returns A sinopse do filme ou série.
     */
    public getSinopse(id: number): string {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getSinopse();
    }

    /**
     * Obtém o ano de lançamento do filme ou série.
     * @returns O ano de lançamento do filme ou série.
     */
    public getAnoLancamento(id: number): number {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getAnoLancamento();
    }

    /**
     * Obtém a faixa etária do filme ou série.
     * @returns A faixa etária do filme ou série.
     */
    public getFaixaEtaria(id: number): number {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getFaixaEtaria();
    }

    /**
     * Obtém a média das avaliações do filme ou série.
     * @returns A média das avaliações do filme ou série.
     */
    public getMediaAvaliacao(id: number): number {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getMediaAvaliacao();
    }

    /**
     * Obtém o elenco do filme ou série.
     * @returns O elenco do filme ou série.
     */
    public getElenco(id: number): Elenco {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getElenco();
    }

    /**
     * Obtém a URL da imagem de capa do filme ou série.
     * @returns A URL da imagem de capa do filme ou série.
     */
    public getUrlImagem(id: number): string {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getUrlImagem();
    }

    /**
     * Obtém a duração do filme ou série.
     * @returns A duração do filme ou série.
     */
    public getDuracao(id: number): number {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getDuracao();
    }

    public listarFilme(quantidadeFilme: number): Array<Filme> {
        return this.baseDeMidia.istarFilme(quantidadeFilme);
    }

    public listarSerie(quantidadeSerie: number): Array<Serie> {
        return this.baseDeMidia.listarSerie(quantidadeSerie);
    }

}