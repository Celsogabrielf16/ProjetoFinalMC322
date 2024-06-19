class Usuario extends Pessoa {

    private static usuarios: Usuario[] = [];
    private id: number;
    private userName: string;
    private email: string;
    private senha: string;
    private filmesFavoritos: Filme[];
    private seriesFavoritas: Serie[];
    private avaliacoes: Avaliacao[];

    constructor(id: number, email: string, senha: string, nome: string, idade: number) {

        super(nome, idade);
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.senha = senha;
        this.filmesFavoritos = [];
        this.seriesFavoritas = [];
        this.avaliacoes = [];
    }

    public static listarUsuarios(): Usuario[] {
        return this.usuarios;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getUserName(): string {
        return this.userName;
    }

    public setUserName(userName: string): void {
        this.userName = this.userName;
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

    public adicionarFilmeFavorito(filme: Filme): void {
        this.filmesFavoritos.push(filme);
    }

    public removerFilmeFavorito(filme: Filme): void {
        this.filmesFavoritos = this.filmesFavoritos.filter(f => f !== filme);
    }

    public adicionarSerieFavorita(serie: Serie): void {
        this.seriesFavoritas.push(serie);
    }

    public removerSerieFavorita(serie: Serie): void {
        this.seriesFavoritas = this.seriesFavoritas.filter(s => s !== serie);
    }

    public adicionarAvaliacao(avaliacao: Avaliacao): void {
        this.avaliacoes.push(avaliacao);
    }

    public removerAvaliacao(avaliacao: Avaliacao): void {
        this.avaliacoes = this.avaliacoes.filter(a => a !== avaliacao);
    }

    public listarFavoritos(): Array<Filme | Serie> {
        return [...this.filmesFavoritos, ...this.seriesFavoritas];
    }

    public listarAvaliacoes(): Avaliacao[] {
        return this.avaliacoes;
    }
}