class Usuario extends Pessoa {

    private static usuarios: Usuario[] = [];
    private id: number;
    private email: string;
    private senha: string;
    private filmesFavoritos: Filme[]; // array dos filmes favoritos
    private seriesFavoritas: Serie[]; // array das series favoritas
    private avaliacoes: Avaliacao[]; // array das avaliações

    constructor(id: number, email: string, senha: string, nome: string, idade: number) {

        super(nome, idade);
        this.id = id;
        this.email = email;
        this.senha = senha;
        this.filmesFavoritos = [];
        this.seriesFavoritas = [];
        this.avaliacoes = [];
    }

    // Método estático para listar todos os usuários

    public static listarUsuarios(): Usuario[] {
        return this.usuarios;
    }

    // Métodos getters e setters para os atributos privados

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getSenha(): string {
        return this.senha;
    }

    public setSenha(senha: string): void {
        this.senha = senha;
    }

    public getFilmesFavoritos(): Filme[] {
        return this.filmesFavoritos;
    }

    public setFilmesFavoritos(filmesFavoritos: Filme[]): void {
        this.filmesFavoritos = filmesFavoritos;
    }

    public getSeriesFavoritas(): Serie[] {
        return this.seriesFavoritas;
    }

    public setSeriesFavoritas(seriesFavoritas: Serie[]): void {
        this.seriesFavoritas = seriesFavoritas;
    }

    public getAvaliacoes(): Avaliacao[] {
        return this.avaliacoes;
    }

    public setAvaliacoes(avaliacoes: Avaliacao[]): void {
        this.avaliacoes = avaliacoes;
    }

    // Adiciona um filme à lista de filmes favoritos

    public adicionarFilmeFavorito(filme: Filme): void {
        this.filmesFavoritos.push(filme);
    }

    // Remove um filme da lista de filmes favoritos

    public removerFilmeFavorito(filme: Filme): void {
        this.filmesFavoritos = this.filmesFavoritos.filter(f => f !== filme);
    }

    // Adiciona uma série à lista de séries favoritas

    public adicionarSerieFavorita(serie: Serie): void {
        this.seriesFavoritas.push(serie);
    }

    // Remove uma série da lista de séries favoritas

    public removerSerieFavorita(serie: Serie): void {
        this.seriesFavoritas = this.seriesFavoritas.filter(s => s !== serie);
    }

    // Adiciona uma avaliação à lista de avaliações

    public adicionarAvaliacao(avaliacao: Avaliacao): void {
        this.avaliacoes.push(avaliacao);
    }

    // Remove uma avaliação da lista de avaliações

    public removerAvaliacao(avaliacao: Avaliacao): void {
        this.avaliacoes = this.avaliacoes.filter(a => a !== avaliacao);
    }

    // Retorna uma lista combinada de filmes e séries favoritos

    public listarFavoritos(): Array<Filme | Serie> {
        return [...this.filmesFavoritos, ...this.seriesFavoritas];
    }

    // Retorna a lista de avaliações do usuário

    public listarAvaliacoes(): Avaliacao[] {
        return this.avaliacoes;
    }


}