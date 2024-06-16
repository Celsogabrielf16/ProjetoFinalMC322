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
        this.baseDeUsuario.adicionarUsuario(username, nome, senha, idade, email);
    }

    /**
     * Método para iniciar a lista de usuários na base de usuários.
     */
    public iniciaListaUsuario(){
        this.baseDeUsuario.criaListaUsuario();
    }

    /**
     * Método para salvar a lista de usuários.
     */
    public salvaListaUsuario(){
        this.baseDeUsuario.salvaListaUsuario();
    }
}
