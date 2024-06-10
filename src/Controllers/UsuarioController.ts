class UsuarioController {

    private usuario: Usuario;
    private usuarioView: UsuarioView;

    constructor(usuarioRecebido: Usuario) {
        this.usuario = usuarioRecebido;
        this.usuarioView = new UsuarioView();
    }

}