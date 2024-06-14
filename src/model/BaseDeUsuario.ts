import Usuario from './Usuario';
import LerUsuario from './LerUsuario';

export default class BaseDeUsuario {
    private static instancia: BaseDeUsuario;
    private lerUsuario: LerUsuario;

    /**
     * Construtor privado para garantir que a classe seja Singleton e inicializar LerUsuario.
     */
    private constructor() {
        this.lerUsuario = new LerUsuario();
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
     * Cria um novo objeto de usuário com os dados fornecidos.
     * @param username Username do novo usuário.
     * @param nome Nome do novo usuário.
     * @param senha Senha do novo usuário.
     * @param idade Idade do novo usuário.
     * @param email Email do novo usuário.
     * @returns O objeto de usuário criado.
     */
    public criarUsuario(username: string, nome: string, senha: string, idade: number, email: string): Usuario { 
        let usuario = new Usuario(nome, idade, username, email, senha);
        return usuario;
    }

    /**
     * Salva o usuário especificado no arquivo utilizando LerUsuario.
     * @param usuario O usuário a ser salvo no arquivo.
     */
    public salvarUsuarioArquivo(usuario: Usuario): void {
        this.lerUsuario.escreverArquivo(usuario);
    }

    /**
     * Obtém a lista de usuários do arquivo utilizando LerUsuario.
     * @returns Um array contendo todos os usuários lidos do arquivo.
     */
    private getListaUsuarios(): Array<Usuario> {
        return this.lerUsuario.lerArquivo();
    }

    /**
     * Verifica se existe um usuário válido com o username especificado.
     * @param username Username do usuário a ser verificado.
     * @returns O usuário encontrado ou null se nenhum usuário for encontrado com o username especificado.
     */
    public usuarioValido(username: string): Usuario | null {
        const listaUsuarios = this.getListaUsuarios();

        for (const usuario of listaUsuarios) {
            if (usuario.userName === username) {
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
        return usuario.senha === senha;
    }
}
