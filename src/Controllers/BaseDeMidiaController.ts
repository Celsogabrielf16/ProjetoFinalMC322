import Diretor from './Diretor';
import BaseDeMidia from './BaseDeMidia';
import Avaliacao from './Avaliacao';
import Categoria from './Categoria';
import Elenco from './Elenco';
import Filme from './Filme';
import Serie from './Serie';

export default class BaseDeMidiaController {
    private baseDeMidia: BaseDeMidia;

    constructor() {
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
     * Retorna uma lista de filmes da base de mídia.
     * @param quantidadeFilme A quantidade de filmes a ser retornada.
     * @returns Um array de objetos Filme.
     */
    public listarFilme(quantidadeFilme: number): Array<Filme> {
        return this.baseDeMidia.listarFilme(quantidadeFilme);
    }
    
    /**
     * Retorna uma lista de séries da base de mídia.
     * @param quantidadeSerie A quantidade de séries a ser retornada.
     * @returns Um array de objetos Serie.
     */
    public listarSerie(quantidadeSerie: number): Array<Serie> {
        return this.baseDeMidia.listarSerie(quantidadeSerie);
    }

    /**
     * Método que identifica a midia com base no seu nome.
     * @param nomeMidia O nome da mídia a ser procurada.
     * @returns A midia, filme ou série.
    */
    public pesquisar(nomeMidia: string): Filme | Serie{

        const midia = this.baseDeMidia.obtemMidiaPeloNome(nomeMidia);
        if(midia){
            return midia.getID();
        }else{
            return -1;
        }
    }

    /**
     * Obtém as temporadas da serie.
     * @returns As temporadas da serie.
     */
    public getTemporadas(id: number): string {
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
    public getFaixaEtaria(id: number): string {
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
    public getImagemCapa(id: number): string {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getImagemCapa();
    }

    /**
     * Obtém a URL da imagem de logo de uma mídia (filme ou série).
     * @returns A URL da imagem de logo da mídia.
     */
    public getImagemLogo(id: number): string {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getImagemLogo();
    }

    /**
    * Obtém a URL da imagem de banner de uma mídia (filme ou série).
    * @returns A URL da imagem de banner da mídia.
    */
    public getImagemBanner(id: number): string {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getImagemBanner();
    }

    /**
     * Obtém a duração do filme ou série.
     * @returns A duração do filme ou série.
     */
    public getDuracao(id: number): string {
        const midia = this.baseDeMidia.obtemMidiaPorID(id);
        return midia.getDuracao();
    }
}