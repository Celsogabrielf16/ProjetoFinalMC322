import BaseDeUsuario from './BaseDeUsuario';
import BaseDeUsuarioView from './BaseDeUsuarioView';

export default class BaseDeUsuarioController {
    private baseDeUsuario: BaseDeUsuario;
    private baseDeUsuarioView: BaseDeUsuarioView;

    constructor(baseDeUsuarioRecebido: BaseDeUsuario) {
        this.baseDeUsuario = BaseDeUsuario.getInstancia();
        this.baseDeUsuarioView = new BaseDeUsuarioView();
    }

    /**
     * Método para adicionar um novo usuário na base de usuários.
     * @param username Username do novo usuário.
     * @param nome Nome do novo usuário.
     * @param senha Senha do novo usuário.
     * @param idade Idade do novo usuário.
     * @param email Email do novo usuário.
     */
    public cadastrarUsuario(username: string, nome: string, senha: string, idade: number, email: string): void {
        const novoUsuario = this.baseDeUsuario.criarUsuario(username, nome, senha, idade, email);
        this.baseDeUsuario.salvarUsuarioArquivo(novoUsuario);
    }

    /**
         * Método para autenticar um usuário com base no username e senha fornecidos.
         * @param username Username do usuário a ser autenticado.
         * @param senha Senha do usuário a ser verificada.
         * @returns true se a autenticação for bem-sucedida.
         * @throws Error se o usuário não for encontrado ou a senha estiver incorreta.
         */
    public autenticarUsuario(username: string, senha: string): boolean {
        const usuario = this.baseDeUsuario.usuarioValido(username);
        if (usuario) {
            const senhaValida = this.baseDeUsuario.senhaValida(usuario, senha);
            if (senhaValida) {
                return true;
            } else {
                throw new Error('Senha incorreta');
            }
        } else {
            throw new Error('Usuário não encontrado');
        }
    }
}
