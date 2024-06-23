import LerMidia from './LerMidia.js';
import Filme from './Filme.js';
import Serie from './Serie.js';
import Avaliacao from './Avaliacao.js';
import Observer from '../interface/IObserver.js';

export default class BaseDeMidia implements Observer {
    private static instancia: BaseDeMidia;
    private lerMidia: LerMidia;
    private listaMidia: Array <Filme|Serie>;
    private listaMidiaPromise: Promise <(Filme | Serie)[]>;

    /**
     * Construtor privado para garantir que a classe seja Singleton e inicializar LerMidia.
     */
    private constructor() {
        this.lerMidia = new LerMidia();
        this.listaMidia = [];
        
        this.listaMidiaPromise = this.criaListaMidia();
    }

    public getListaMidiaPromise() {
        return this.listaMidiaPromise;
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
    public getListaMidia(): Array <Filme|Serie> {
        return this.listaMidia;
    }

    /**
     * Método que cria a lista de mídias utilizando o método lerArquivo() de LerMidia.
     * Atualiza a lista de mídias na instância atual.
     */
    public async criaListaMidia() {
        let arquivoLido = this.lerMidia.lerArquivo();
        
        arquivoLido.then(listaMidia => {
            this.listaMidia = listaMidia;
        });

        return arquivoLido;
    }

    /**
     * Método que salva a lista de Midia utilizando o método escreverArquivo() de LerMidia.
    */
    public salvaListaMidia(): void {
        //this.lerMidia.escreverArquivo(this.getListaMidia());
    }

    /**
     * Método que identifica a midia com base no seu id.
     * @returns A midia, filme ou série.
    */
    public obtemMidiaPorID(id: number): Filme | Serie | null{

        let listaDeMidia: Array<Filme | Serie> = this.getListaMidia();
        let midiaEncontrada = listaDeMidia.find(midia => midia.getID() === id);
        return midiaEncontrada || null;
    }

    /**
     * Método que identifica a mídia com base no seu nome.
     * @param nomeMidia O nome da mídia a ser procurada.
     * @returns A mídia encontrada (filme ou série) ou null se não encontrada.
     */
    public obtemMidiaPeloNome(nomeMidia: string): Filme | Serie | null {
        let listaDeMidia: Array<Filme | Serie> = this.getListaMidia();
        let midiaEncontrada = listaDeMidia.find(midia => midia.getTitulo() === nomeMidia);
        return midiaEncontrada || null;
    }


    /**
     * Adiciona uma avaliação ao filme ou série.
     * @param Avaliacao avaliação.
     */
    public adicionarAvaliacao(avaliacao: Avaliacao): void {
        const idMidia = avaliacao.getIDMidia();
        this.listaMidia.forEach(midia => {
            if (midia.getID() === idMidia) {
                midia.adicionarAvaliacao(avaliacao);
            }
        });
    }

    /**
     * Recalcula a média das avaliações de uma mídia específica.
     * @param avaliacao A avaliação utilizada para identificar a mídia e recalcular a média.
     */
    public recalculaMediaAvaliacao(avaliacao: Avaliacao): void {
        const midia = this.obtemMidiaPorID(avaliacao.getIDMidia()) as Filme | Serie;
        midia.calculaMediaDasAvaliacoes(midia.getAvaliacoes());
    }

    /**
     * Adiciona uma nova avaliação e recalcula a média das avaliações da mídia.
     * @param avaliacao A avaliação a ser adicionada.
     */
    public update(avaliacao: Avaliacao): void {
        this.adicionarAvaliacao(avaliacao);
        this.recalculaMediaAvaliacao(avaliacao);
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
}