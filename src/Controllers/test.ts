public cadastrarUsuario(username: string, nome: string, senha: string, idade: number, email: string): void {
    const usuario = new Usuario(username, nome, senha, idade, email);
    const listaUsuarios = BaseDeUsuario.getInstancia().getListaUsuarios();
    listaUsuarios.push(usuario);
}