import Filme from './Filme'; // Importa a classe Filme (supondo que exista)
import Serie from './Serie'; // Importa a classe Serie (supondo que exista)

export default class UsuarioController {

    private usuario: Usuario;
    private usuarioView: UsuarioView;

    constructor(usuarioRecebido: Usuario) {
        this.usuario = usuarioRecebido;
        this.usuarioView = new UsuarioView();
    }

    /**
     * Método para autenticar um usuário com base no username e senha fornecidos.
     * @param username Username do usuário a ser autenticado.
     * @param senha Senha do usuário a ser verificada.
     * @returns true se a autenticação for bem-sucedida.
     * @throws Error se o usuário não for encontrado ou a senha estiver incorreta.
     */
    public autenticarUsuario(username: string, senha: string): boolean {
        const usuario = this.usuario.usuarioValido(username);
        if (usuario) {
            const senhaValida = this.usuario.senhaValida(usuario, senha);
            if (senhaValida) {
                return true;
            } else {
                throw new Error('Senha incorreta');
            }
        } else {
            throw new Error('Usuário não encontrado');
        }
    }

    /**
     * Método para adicionar um novo usuário na base de usuários.
     * @param username Username do novo usuário.
     * @param nome Nome do novo usuário.
     * @param senha Senha do novo usuário.
     * @param idade Idade do novo usuário.
     * @param email Email do novo usuário.
     */
    public cadastrarUsuario(username: string, nome: string, senha: string, idade: number, email: string) {
        this.usuario.cadastrarUsuario(username, nome, senha, idade, email);
    }

    /**
     * Método para listar os favoritos do usuário.
     */
    public listarFavoritos() {
        this.usuario.listarFavoritos(); 
    }

    /**
     * Método para listar as avaliações do usuário.
     */
    public listarAvaliacoes() {
        this.usuario.listarAvaliacoes();
    }

    /**
     * Método para inserir um filme ou série na lista de favoritos do usuário.
     * @param favorito Objeto do tipo Filme ou Serie a ser inserido na lista de favoritos.
     */
    public inserirFavorito(favorito: Filme | Serie) {
        if (favorito instanceof Filme) {
            this.usuario.setFilmeFavorito(favorito);
        } else if (favorito instanceof Serie) {
            this.usuario.setSerieFavorita(favorito);
        } else {
            throw new Error('Tipo de favorito não suportado');
        }
    }

    /**
     * Método para inserir uma avaliação do usuário.
     * @param avaliacao Objeto do tipo Avaliacao a ser inserido na lista de avaliações.
     */
    public inserirAvaliacao(avaliacao: Avaliacao) {
        this.usuario.setAvaliacoes(avaliacao);
    }

    /**
     * Método para obter o ID do usuário.
     * @returns O ID do usuário.
     */
    public getId(): number {
        return this.usuario.getId();
    }

    /**
     * Método para obter o nome de usuário do usuário.
     * @returns O nome de usuário do usuário.
     */
    public getUserName(): string {
        return this.usuario.getUserName();
    }

    /**
     * Método para obter o email do usuário.
     * @returns O email do usuário.
     */
    public getEmail(): string {
        return this.usuario.getEmail();
    }

    /**
     * Método para obter o nome do usuário.
     * @returns O nome do usuário.
     */
    public getNome(): string {
        return this.usuario.getNome();
    }

    /**
     * Método para obter a idade do usuário.
     * @returns A idade do usuário.
     */
    public getIdade(): number {
        return this.usuario.getIdade();
    }
}