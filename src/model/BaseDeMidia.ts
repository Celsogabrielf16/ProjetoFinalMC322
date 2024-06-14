export default class BaseDeMidia {
    private static instancia: BaseDeMidia;
    private lerMidia: LerMidia;

    /**
     * Construtor privado para garantir que a classe seja Singleton e inicializar LerMidia.
     */
    private constructor() {
        this.lerMidia = new LerMidia();
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

    public getListaMidia(){
        return this.lerMidia.lerArquivo();
    }
}