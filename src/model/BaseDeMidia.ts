import Midia from './Midia';
import LerMidia from './LerMidia';
import Filme from './Filme';
import Serie from './Serie';

export default class BaseDeMidia {
    private static instancia: BaseDeMidia;
    private lerMidia: LerMidia;
    private listaMidia: Array<Midia>;

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
    public criaListaMidia() {
        this.listaMidia = this.lerMidia.lerArquivo();
    }

    /**
     * Método que salva a lista de Midia utilizando o método escreverArquivo() de LerMidia.
    */
    public salvaListaMidia() {
        this.lerMidia.escreverArquivo(this.getListaMidia());
    }

    //////////

    public obtemMidiaPorID(id: number): Filme | Serie{
        const listaDeMidia = this.getListaMidia();
        for(const midia in listaDeMidia){
            if(midia.getID() === id){
                return midia;
            }
        }
        return null;
    }

    /**
     * Obtém o título do filme.
     * @returns O título do filme.
     */
    public getTitulo(midia: Filme | Serie): string {
        return this.filme.getTitulo();
    }

    /**
     * Obtém a sinopse do filme.
     * @returns A sinopse do filme.
     */
    public getSinopse(id: string): string {
        return this.filme.getSinopse();
    }

    /**
     * Obtém o ano de lançamento do filme.
     * @returns O ano de lançamento do filme.
     */
    public getAnoLancamento(id: string): number {
        return this.filme.getAnoLancamento();
    }

    /**
     * Obtém a faixa etária do filme.
     * @returns A faixa etária do filme.
     */
    public getFaixaEtaria(id: string): number {
        return this.filme.getFaixaEtaria();
    }

    /**
     * Obtém a média das avaliações do filme.
     * @returns A média das avaliações do filme.
     */
    public getMediaAvaliacao(id: string): number {
        return this.filme.getMediaAvaliacao();
    }

    /**
     * Obtém o elenco do filme.
     * @returns O elenco do filme.
     */
    public getElenco(id: string): Elenco {
        return this.filme.getElenco();
    }

    /**
     * Obtém a URL da imagem de capa do filme.
     * @returns A URL da imagem de capa do filme.
     */
    public getUrlImagem(id: string): string {
        return this.filme.getUrlImagem();
    }

    /**
     * Obtém o diretor do filme.
     * @returns O diretor do filme.
     */
    public getDiretor(id: string): Diretor {
        return this.filme.getDiretor();
    }

    /**
     * Obtém a duração do filme.
     * @returns A duração do filme.
     */
    public getDuracao(id: string): number {
        return this.filme.getDuracao();
    }

}