import Pessoa from "./Pessoa";
import Filme from "./Filme";
import Serie from "./Serie";
import Avaliacao from "./Avaliacao";

export default class Usuario extends Pessoa {

    private id: number;
    private email: string;
    private senha: string;
    private filmesFavoritos: Filme[];
    private seriesFavoritas: Serie[];
    private avaliacoes: Avaliacao[];

    constructor(id: number, email: string, senha: string, nome: string) {

        super(nome);
        this.id = id;
        this.email = email;
        this.senha = senha;
        this.filmesFavoritos = [];
        this.seriesFavoritas = [];
        this.avaliacoes = [];
    }

    /**
     * Obtém o ID do usuário.
     * @returns O ID do usuário.
     */
    public getId(): number {
        return this.id;
    }

    /**
     * Define o ID do usuário.
     * @param id - O novo ID do usuário.
     */
    public setId(id: number): void {
        this.id = id;
    }

    /**
     * Obtém o email do usuário.
     * @returns O email do usuário.
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Define o email do usuário.
     * @param email - O novo email do usuário.
     */
    public setEmail(email: string): void {
        this.email = email;
    }

    /**
     * Obtém a senha do usuário.
     * @returns A senha do usuário.
     */
    public getSenha(): string {
        return this.senha;
    }

    /**
     * Define a senha do usuário.
     * @param senha - A nova senha do usuário.
     */
    public setSenha(senha: string): void {
        this.senha = senha;
    }

    /**
     * Obtém a lista de filmes favoritos do usuário.
     * @returns A lista de filmes favoritos do usuário.
     */
    public getFilmesFavoritos(): Filme[] {
        return this.filmesFavoritos;
    }

    /**
     * Define a lista de filmes favoritos do usuário.
     * @param filmesFavoritos - A nova lista de filmes favoritos do usuário.
     */
    public setFilmesFavoritos(filmesFavoritos: Filme[]): void {
        this.filmesFavoritos = filmesFavoritos;
    }

    /**
     * Obtém a lista de séries favoritas do usuário.
     * @returns A lista de séries favoritas do usuário.
     */
    public getSeriesFavoritas(): Serie[] {
        return this.seriesFavoritas;
    }

    /**
     * Define a lista de séries favoritas do usuário.
     * @param seriesFavoritas - A nova lista de séries favoritas do usuário.
     */
    public setSeriesFavoritas(seriesFavoritas: Serie[]): void {
        this.seriesFavoritas = seriesFavoritas;
    }

    /**
     * Obtém a lista de avaliações feitas pelo usuário.
     * @returns A lista de avaliações do usuário.
     */
    public getAvaliacoes(): Avaliacao[] {
        return this.avaliacoes;
    }

    /**
     * Define a lista de avaliações do usuário.
     * @param avaliacoes - A nova lista de avaliações do usuário.
     */
    public setAvaliacoes(avaliacoes: Avaliacao[]): void {
        this.avaliacoes = avaliacoes;
    }

    /**
     * Adiciona um filme à lista de filmes favoritos do usuário.
     * @param filme - O filme a ser adicionado.
     */
    public adicionarFilmeFavorito(filme: Filme): void {
        this.filmesFavoritos.push(filme);
    }

    /**
     * Remove um filme da lista de filmes favoritos do usuário.
     * @param filme - O filme a ser removido.
     */
    public removerFilmeFavorito(filme: Filme): void {
        this.filmesFavoritos = this.filmesFavoritos.filter(f => f !== filme);
    }

    /**
     * Adiciona uma série à lista de séries favoritas do usuário.
     * @param serie - A série a ser adicionada.
     */
    public adicionarSerieFavorita(serie: Serie): void {
        this.seriesFavoritas.push(serie);
    }

    /**
     * Remove uma série da lista de séries favoritas do usuário.
     * @param serie - A série a ser removida.
     */
    public removerSerieFavorita(serie: Serie): void {
        this.seriesFavoritas = this.seriesFavoritas.filter(s => s !== serie);
    }

    /**
     * Adiciona uma avaliação à lista de avaliações do usuário.
     * @param avaliacao - A avaliação a ser adicionada.
     */
    public adicionarAvaliacao(avaliacao: Avaliacao): void {
        this.avaliacoes.push(avaliacao);
    }

    /**
     * Remove uma avaliação da lista de avaliações do usuário.
     * @param avaliacao - A avaliação a ser removida.
     */
    public removerAvaliacao(avaliacao: Avaliacao): void {
        this.avaliacoes = this.avaliacoes.filter(a => a !== avaliacao);
    }

    /**
     * Retorna uma lista combinada de filmes e séries favoritas do usuário.
     * @returns A lista combinada de filmes e séries favoritas.
     */
    public listarFavoritos(): Array<Filme | Serie> {
        return [...this.filmesFavoritos, ...this.seriesFavoritas];
    }

    /**
     * Retorna a lista de avaliações feitas pelo usuário.
     * @returns A lista de avaliações do usuário.
     */
    public listarAvaliacoes(): Avaliacao[] {
        return this.avaliacoes;
    }
}