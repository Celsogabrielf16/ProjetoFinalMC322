import Usuario from './Usuario';
import LerUsuario from './LerUsuario';

export default class BaseDeUsuario {
    private static instancia: BaseDeUsuario;
    private usuarioAtivo: Usuario | null = null;
    private lerUsuario: LerUsuario;
    private listaUsuarios: Array<Usuario>;

    /**
     * Construtor privado para garantir que a classe seja Singleton e inicializar LerUsuario.
     */
    private constructor() {
        this.lerUsuario = new LerUsuario();
        this.listaUsuarios = [];
        this.criaListaUsuario();
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
    private criaListaUsuario() {
        this.listaUsuarios = this.lerUsuario.lerArquivo();
    }

    /**
     * Método que salva a lista de usuários utilizando o método escreverArquivo() de LerUsuario.
     */
    public salvaListaUsuario() {
        this.lerUsuario.escreverArquivo(this.getListaUsuarios());
    }

    /**
     * Verifica se existe um usuário válido com o username especificado.
     * @param username Username do usuário a ser verificado.
     * @returns O usuário encontrado ou null se nenhum usuário for encontrado com o username especificado.
     */
    public usuarioValido(username: string): Usuario | null {
        for (const usuario of this.listaUsuarios) {
            if (usuario.getUsername() === username) {
                return usuario;
            }
        }
        return null;
    }

    /**
     * Verifica se a senha fornecida corresponde à senha do usuário especificado.
     * @param usuario O usuário cuja senha será verificada.
     * @param senha A senha a ser verificada.
     * @returns true se a senha fornecida corresponde à senha do usuário, false caso contrário.
     */
    public senhaValida(usuario: Usuario, senha: string): boolean {
        return usuario.getSenha() === senha;
    }

    /**
     * Adiciona o usuário ativo atual.
     * @param usuario O usuário a ser marcado como ativo.
     */
    public adicionaUsuarioAtivo(usuario: Usuario) {
        this.usuarioAtivo = usuario;
    }

    /**
     * Cadastra um novo usuário se o username não estiver em uso.
     * @param username Username do novo usuário.
     * @param nome Nome do novo usuário.
     * @param senha Senha do novo usuário.
     * @param idade Idade do novo usuário.
     * @param email Email do novo usuário.
     * @returns O usuário recém-cadastrado ou null se o username já estiver em uso.
     */
    public cadastrar(username: string, nome: string, senha: string, idade: number, email: string): Usuario | null {
        if (this.usuarioValido(username)) {
            return null; // Username já está em uso
        }
        let usuarioNovo = new Usuario(username, nome, senha, idade, email);
        this.adicionaUsuario(usuarioNovo);
        return usuarioNovo;
    }

    /**
     * Método privado que adiciona um novo usuário à lista de usuários.
     * @param usuario O usuário a ser inserido na lista de usuários.
     */
    private adicionaUsuario(usuario: Usuario) {
        this.listaUsuarios.push(usuario);
    }
}