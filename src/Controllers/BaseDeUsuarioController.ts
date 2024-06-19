import BaseDeUsuario from './BaseDeUsuario';
import Filme from './Filme';
import Serie from './Serie';
import Avaliacao from './Avaliacao';

export default class BaseDeUsuarioController {
    private baseDeUsuario: BaseDeUsuario;

    constructor() {
        this.baseDeUsuario = BaseDeUsuario.getInstancia();
    }

    /**
     * Método para salvar a lista de usuários.
     */
    public salvaListaUsuario(){
        this.baseDeUsuario.salvaListaUsuario();
    }

    /**
     * Método para autenticar um usuário com base no username e senha fornecidos.
     * @param username Username do usuário a ser autenticado.
     * @param senha Senha do usuário a ser verificada.
     * @returns true se a autenticação for bem-sucedida ou false caso contrário.
     */
    public autenticarUsuario(username: string, senha: string): boolean {
        const usuario = this.baseDeUsuario.usuarioValido(username);
        if (usuario) {
            const senhaValida = this.baseDeUsuario.senhaValida(usuario, senha);
            if (senhaValida) {
                this.baseDeUsuario.adicionaUsuarioAtivo(usuario);
                return true;
            }
        }
        return false;
    }

    /**
     * Método para cadastrar um novo usuário e definir o usuário ativo.
     * @param username Username do novo usuário.
     * @param nome Nome do novo usuário.
     * @param senha Senha do novo usuário.
     * @param idade Idade do novo usuário.
     * @param email Email do novo usuário.
     * @returns true se o cadastro foi bem-sucedido, false se o username já estiver em uso.
     */
    public cadastrarUsuario(username: string, nome: string, senha: string, idade: number, email: string): boolean {
        const novoUsuario = this.baseDeUsuario.cadastrar(username, nome, senha, idade, email);
        if (novoUsuario === null) {
            return false;
        }
        this.baseDeUsuario.adicionaUsuarioAtivo(novoUsuario);
        return true;
    }

    /**
     * Método para obter o ID do usuário ativo.
     * @returns O ID do usuário ativo.
     */
    public getIDUsuarioAtivo(): number{
        return this.baseDeUsuario.getIDUsuarioAtivo();
    }

    /**
     * Método para listar os favoritos do usuário.
     */
    public listarFavoritos(): Array <Filme | Serie> {
        return this.baseDeUsuario.listarFavoritos(); 
    }
    
    /**
     * Método para listar as avaliações do usuário.
     */
    public listarAvaliacoes(): Array <Avaliacao>{
        return this.baseDeUsuario.listarAvaliacoes();
    }
    
    /**
     * Método para inserir um filme ou série na lista de favoritos do usuário.
     * @param favorito Objeto do tipo Filme ou Serie a ser inserido na lista de favoritos.
     */
    public inserirFavorito(favorito: Filme | Serie): void {
        this.baseDeUsuario.inserirFavorito(favorito);
    }

    /**
     * Método para inserir uma avaliação do usuário.
     * @param avaliacao Objeto do tipo Avaliacao a ser inserido na lista de avaliações.
     */
    public inserirAvaliacao(avaliacao: Avaliacao): void {
        this.baseDeUsuario.inserirAvaliacao(avaliacao);
    }

    /**
     * Método para obter o nome de usuário do usuário.
     * @returns O nome de usuário do usuário.
     */
    public getUserName(): string {
        return this.baseDeUsuario.getUserName();
    }

    /**
     * Método para obter o email do usuário.
     * @returns O email do usuário.
     */
    public getEmail(): string {
        return this.baseDeUsuario.getEmail();
    }

    /**
     * Método para obter o nome do usuário.
     * @returns O nome do usuário.
     */
    public getNome(): string {
        return this.baseDeUsuario.getNome();
    }

    /**
     * Método para obter a idade do usuário.
     * @returns A idade do usuário.
     */
    public getIdade(): number {
        return this.baseDeUsuario.getIdade();
    }
}