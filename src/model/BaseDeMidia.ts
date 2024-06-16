import Midia from './Midia';
import LerMidia from './LerMidia';

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
}