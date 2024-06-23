import Usuario from './Usuario';
import LerUsuario from './LerUsuario';
import Filme from './Filme';
import Serie from './Serie';
import Avaliacao from './Avaliacao';
import Observer from '../interface/IObserver';

export default class BaseDeUsuario implements Observer{
    private static instancia: BaseDeUsuario;
    private usuarioAtivo: Usuario | null;
    private lerUsuario: LerUsuario;
    private listaUsuarios: Array<Usuario>;

    /**
     * Construtor privado para garantir que a classe seja Singleton e inicializar LerUsuario.
     */
    private constructor() {
        this.lerUsuario = new LerUsuario();
        this.listaUsuarios = [];
        this.criaListaUsuario();
        this.usuarioAtivo = null;
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
        this.lerUsuario.lerArquivo().then(listaUsuario => {
            this.listaUsuarios = listaUsuario;
        });
    }

    /**
     * Método que salva a lista de usuários utilizando o método escreverArquivo() de LerUsuario.
     */
    public salvaListaUsuario(): void {
        this.lerUsuario.escreverArquivo(this.getListaUsuarios());
    }

    /**
     * Verifica se existe um usuário válido com o email especificado.
     * @param email email do usuário a ser verificado.
     * @returns O usuário encontrado ou null se nenhum usuário for encontrado com o username especificado.
     */
    public usuarioValido(email: string): Usuario | null {
        for (const usuario of this.listaUsuarios) {
            if (usuario.getEmail() === email) {
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
     * @param nome Nome do novo usuário.
     * @param senha Senha do novo usuário.
     * @param email Email do novo usuário.
     * @returns O usuário recém-cadastrado ou null se o username já estiver em uso.
     */
    public cadastrar(nome: string, senha: string, email: string): Usuario | null {
        if (this.usuarioValido(email)) {
            return null; // email já está em uso
        }
        let usuarioNovo = new Usuario(this.getListaUsuarios().length + 1, email, senha, nome, [], [],[]); // id: number, email: string, senha: string, nome: string
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
     * Método para listar os favoritos do usuário.
     */
    public listarFavoritos(): Array <Filme | Serie> {
        if (this.usuarioAtivo) {
            return this.usuarioAtivo.listarFavoritos();
        } else {
            return [];
        }
    }

    /**
     * Método para listar as avaliações do usuário.
     */
    public listarAvaliacoes(): Array <Avaliacao>{
        if (this.usuarioAtivo) {
            return this.usuarioAtivo.listarAvaliacoes();
        }else{
            return [];
        }
    }

    /**
     * Método para inserir um filme ou série na lista de favoritos do usuário.
     * @param favorito Objeto do tipo Filme ou Serie a ser inserido na lista de favoritos.
     */
    public inserirFavorito(favorito: Filme | Serie): void {
        if (favorito instanceof Filme) {
            if(this.usuarioAtivo){
                this.usuarioAtivo.adicionarFilmeFavorito(favorito);
            }
        } else if (favorito instanceof Serie) {
            if(this.usuarioAtivo){
                this.usuarioAtivo.adicionarSerieFavorita(favorito);
            }
        }
    }

    /**
     * Atualiza as avaliações do usuário ativo.
     * @param avaliacao - A avaliação a ser adicionada ao usuário ativo.
     */
    public update(avaliacao: Avaliacao): void {
        if (this.usuarioAtivo) {
            this.usuarioAtivo.adicionarAvaliacao(avaliacao);
        }
    }

    /**
     * Método para obter o ID do usuário ativo.
     * @returns O ID do usuário ativo ou -1 se não houver um usuário ativo.
     */
    public getIDUsuarioAtivo(): number {
        if (this.usuarioAtivo) {
            return this.usuarioAtivo.getId();
        }else{
            return -1;
        }
    }


    /**
     * Método para obter o email do usuário.
     * @returns O email do usuário.
     */
    public getEmail(): string {
        if(this.usuarioAtivo){
            return this.usuarioAtivo.getEmail();  
        }else{
            return "Email não encontrado!";
        }
    }

    /**
     * Método para obter o nome do usuário.
     * @returns O nome do usuário.
     */
    public getNome(): string {
        if(this.usuarioAtivo){
            return this.usuarioAtivo.getNome();
        }else{
            return "Nome não encontrado!";
        }
    }
}