import Usuario from './Usuario';
import LerUsuario from './LerUsuario';

export default class BaseDeUsuario {
    private static instancia: BaseDeUsuario;
    private lerUsuario: LerUsuario;
    private listaUsuarios: Array<Usuario>;

    /**
     * Construtor privado para garantir que a classe seja Singleton e inicializar LerUsuario.
     */
    private constructor() {
        this.lerUsuario = new LerUsuario();
        this.listaUsuarios = [];
    }

    /**
     * Método estático para obter a instância única da classe BaseDeUsuario (Singleton).
     * Cria uma nova instância se não existir uma já.
     * @returns A instância única da classe BaseDeUsuario.
     */
    public static getInstancia(): BaseDeUsuario {
        if (!BaseDeUsuario.instancia) {
            BaseDeUsuario.instancia = new BaseDeUsuario();
        }
        return BaseDeUsuario.instancia;
    }

    /**
     * Obtém a lista de usuários do arquivo utilizando o método lerArquivo() de LerUsuario.
     * @returns Um array contendo todos os usuários lidos do arquivo.
     */
    public getListaUsuarios(): Array<Usuario> {
        return this.listaUsuarios;
    }

    /**
     * Método que cria a lista de usuários utilizando o método lerArquivo() de LerUsuario.
     */
    public criaListaUsuario() {
        this.listaUsuarios = this.lerUsuario.lerArquivo();
    }

    /**
     * Método que adiciona um novo usuário à lista de usuários.
     * @param username Username do novo usuário.
     * @param nome Nome do novo usuário.
     * @param senha Senha do novo usuário.
     * @param idade Idade do novo usuário.
     * @param email Email do novo usuário.
     */
    public adicionaUsuario(username: string, nome: string, senha: string, idade: number, email: string) {
        let usuario = new Usuario(username, nome, senha, idade, email);
        this.listaUsuarios.push(usuario);
    }

    /**
     * Método que salva a lista de usuários utilizando o método escreverArquivo() de LerUsuario.
     */
    public salvaListaUsuario() {
        this.lerUsuario.escreverArquivo(this.getListaUsuarios);
    }
}
