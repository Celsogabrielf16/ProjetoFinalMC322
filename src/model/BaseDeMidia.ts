import Midia from './Midia';
import LerMidia from './LerMidia';
import Filme from './Filme';
import Serie from './Serie';
import Diretor from './Diretor';
import Elenco from './Elenco';
import Avaliacao from './Avaliacao';
import Categoria from './Categoria';
import Observer from './Observer';

export default class BaseDeMidia implements Observer {
    private static instancia: BaseDeMidia;
    private lerMidia: LerMidia;
    private listaMidia: Array <Filme|Serie>;

    /**
     * Construtor privado para garantir que a classe seja Singleton e inicializar LerMidia.
     */
    private constructor() {
        this.lerMidia = new LerMidia();
        this.listaMidia = [];
        this.criaListaMidia();
    }

    /**
     * Método estático para obter a instância única da classe BaseDeMidia (Singleton).
     * Cria uma nova instância se não existir uma já.
     * @returns A instância única da classe BaseDeMidia.
     */
    public static getInstancia(): BaseDeMidia {
        if (!BaseDeMidia.instancia) {
            BaseDeMidia.instancia = new BaseDeMidia();
        }
        return BaseDeMidia.instancia;
    }

    /**
     * Retorna a lista de mídias atual.
     * @returns Um array contendo todas as mídias na base de mídias.
     */
    public getListaMidia(): Array<Midia> {
        return this.listaMidia;
    }

    /**
     * Método que cria a lista de mídias utilizando o método lerArquivo() de LerMidia.
     * Atualiza a lista de mídias na instância atual.
     */
    public criaListaMidia(): void {
        this.listaMidia = this.lerMidia.lerArquivo();
    }

    /**
     * Método que salva a lista de Midia utilizando o método escreverArquivo() de LerMidia.
    */
    public salvaListaMidia(): void {
        this.lerMidia.escreverArquivo(this.getListaMidia());
    }

   /**
     * Método que identifica a midia com base no seu id.
     * @returns A midia, filme ou série.
    */
    public obtemMidiaPorID(id: number): Filme | Serie{

        let listaDeMidia: Array<Filme | Serie> = this.getListaMidia();
        let midiaEncontrada = listaDeMidia.find(midia => midia.id === id);
        return midiaEncontrada || null;
    }

    /**
     * Lista os diretores da série.
     * @returns Todos os diretores da série.
     */
    public listarDiretores(serie: Serie): Array<Diretor>{
        return serie.listarDiretores();
    }

    /**
     * Lista as avaliações do filme ou série.
     */
    public listarAvaliacoes(midia: Filme | Serie): Array<Avaliacao> {
        return midia.listarAvaliacoes();

    }

    /**
     * Lista as categorias do filme ou série.
     */
    public listarCategorias(midia: Filme | Serie): Array<Categoria> {
        return midia.listarCategorias();
    }

    /**
     * Adiciona uma avaliação ao filme ou série.
     * @param Avaliacao avaliação.
     */
    public adicionarAvaliacao(avaliacao: Avaliacao): void {
        const nomeMidia = avaliacao.getNomeMidia();
        this.listaMidia.forEach(midia => {
            if (midia.getTitulo() === nomeMidia) {
                midia.adicionarAvaliacao(avaliacao);
            }
        });
    }

    /**
     * Atualiza a avaliação de uma mídia existente ou adiciona uma nova avaliação.
     * @param avaliacao A avaliação a ser atualizada ou adicionada.
     */
    public update(avaliacao: Avaliacao): void {
        this.adicionarAvaliacao(avaliacao);
    }

    /**
     * Retorna uma lista dos primeiros filmes disponíveis na lista de mídias.
     * @param quantidadeFilme O número de filmes a serem listados.
     * @returns Um array contendo os filmes listados.
     */
    public listarFilme(quantidadeFilme: number): Array<Filme> {

        const listaDeMidia: Array<Filme | Serie> = this.getListaMidia();
        const filmes: Array<Filme> = listaDeMidia.filter(midia => midia instanceof Filme) as Array<Filme>;
        return filmes.slice(0, quantidadeFilme);
    }

    /**
     * Retorna uma lista das primeiras séries disponíveis na lista de mídias.
     * @param quantidadeSerie O número de séries a serem listadas.
     * @returns Um array contendo as séries listadas.
     */
    public listarSerie(quantidadeSerie: number): Array<Serie> {

        const listaDeMidia: Array<Filme | Serie> = this.getListaMidia();
        const series: Array<Serie> = listaDeMidia.filter(midia => midia instanceof Serie) as Array<Serie>;
        return series.slice(0, quantidadeSerie);
    }

    /**
     * Obtém as temporadas da serie.
     * @returns As temporadas da serie.
     */
    public getTemporadas(serie: Serie): string {
        return serie.getTemporadas();
    }

    /**
     * Obtém o diretor do filme.
     * @returns O diretor do filme.
     */
    public getDiretor(filme: Filme): Diretor {
        return filme.getDiretor();
    }

    /**
     * Obtém o título do filme ou série.
     * @returns O título do filme ou série.
     */
    public getTitulo(midia: Filme | Serie): string {
        return midia.getTitulo();
    }

    /**
     * Obtém a sinopse do filme ou série.
     * @returns A sinopse do filme ou série.
     */
    public getSinopse(midia: Filme | Serie): string {
        return midia.getSinopse();
    }

    /**
     * Obtém o ano de lançamento do filme ou série.
     * @returns O ano de lançamento do filme ou série.
     */
    public getAnoLancamento(midia: Filme | Serie): number {
        return midia.getAnoLancamento();
    }

    /**
     * Obtém a faixa etária do filme ou série.
     * @returns A faixa etária do filme ou série.
     */
    public getFaixaEtaria(midia: Filme | Serie): string {
        return midia.getFaixaEtaria();
    }

    /**
     * Obtém a média das avaliações do filme ou série.
     * @returns A média das avaliações do filme ou série.
     */
    public getMediaAvaliacao(midia: Filme | Serie): number {
        return midia.getMediaAvaliacao();
    }

    /**
     * Obtém o elenco do filme ou série.
     * @returns O elenco do filme ou série.
     */
    public getElenco(midia: Filme | Serie): Elenco {
        return midia.getElenco();
    }

    /**
     * Obtém a URL da imagem de capa do filme ou série.
     * @param midia A mídia (filme ou série) da qual se deseja obter a imagem de capa.
     * @returns A URL da imagem de capa da mídia.
     */
    public getImagemCapa(midia: Filme | Serie): string {
        return midia.getImagemCapa();
    }

    /**
     * Obtém a URL da imagem de banner de uma mídia (filme ou série).
     * @param midia A mídia (filme ou série) da qual se deseja obter a imagem de banner.
     * @returns A URL da imagem de banner da mídia.
     */
    public getImagemBanner(midia: Filme | Serie): string {
        return midia.getImagemBanner();
    }

    /**
     * Obtém a URL da imagem de logo de uma mídia (filme ou série).
     * @param midia A mídia (filme ou série) da qual se deseja obter a imagem de logo.
     * @returns A URL da imagem de logo da mídia.
     */
    public getImagemLogo(midia: Filme | Serie): string {
        return midia.getImagemLogo();
    }

    /**
     * Obtém a duração do filme ou série.
     * @returns A duração do filme ou série.
     */
    public getDuracao(midia: Filme | Serie): string {
        return midia.getDuracao();
    }
}