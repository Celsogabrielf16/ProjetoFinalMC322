import Usuario from './Usuario';
import LerUsuario from './LerUsuario';
import Filme from './Filme';
import Serie from './Serie';
import Avaliacao from './Avaliacao';

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
    private criaListaUsuario(): void {
        this.listaUsuarios = this.lerUsuario.lerArquivo();
    }

    /**
     * Método que salva a lista de usuários utilizando o método escreverArquivo() de LerUsuario.
     */
    public salvaListaUsuario(): void {
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
    public adicionaUsuarioAtivo(usuario: Usuario): void {
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
    private adicionaUsuario(usuario: Usuario): void {
        this.listaUsuarios.push(usuario);
    }

    /**
     * Método para obter o ID do usuário ativo.
     * @returns O ID do usuário ativo ou -1 se não houver um usuário ativo.
     */
    public getIDUsuarioAtivo(): number { 
        return this.usuarioAtivo.getID();
    }

    /**
     * Método para listar os favoritos do usuário.
     */
    public listarFavoritos(): Array <Filme | Serie> {
        return this.usuarioAtivo.listarFavoritos(); 
    }

    /**
     * Método para listar as avaliações do usuário.
     */
    public listarAvaliacoes(): Array <Avaliacao>{
        return this.usuarioAtivo.listarAvaliacoes();
    }

    /**
     * Método para obter o nome de usuário do usuário.
     * @returns O nome de usuário do usuário.
     */
    public getUserName(): string {
        return this.usuarioAtivo.getUserName();
    }

    /**
     * Método para obter o email do usuário.
     * @returns O email do usuário.
     */
    public getEmail(): string {
        return this.usuarioAtivo.getEmail();
    }

    /**
     * Método para obter o nome do usuário.
     * @returns O nome do usuário.
     */
    public getNome(): string {
        return this.usuarioAtivo.getNome();
    }

    /**
     * Método para obter a idade do usuário.
     * @returns A idade do usuário.
     */
    public getIdade(): number {
        return this.usuarioAtivo.getIdade();
    }
}