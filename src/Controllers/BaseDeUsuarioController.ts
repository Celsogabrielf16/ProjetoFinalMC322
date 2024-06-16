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
