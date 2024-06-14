class BaseDeUsuarioController {

    private baseDeUsuario: BaseDeUsuario;
    private baseDeUsuarioView: BaseDeUsuarioView;

    constructor(baseDeUsuarioRecebido: BaseDeUsuario) {
        this.baseDeUsuario = baseDeUsuarioRecebido;
        this.baseDeUsuarioView = new BaseDeUsuarioView();
    }

}