class Usuario {

    private id: number;
    private nome: string;
    private senha: string;
    private filmesFavoritos: Filme[];
    private seriesFavoritas: Serie[];
    private avaliacoes: Avaliacao[];

    constructor(id: number, nome: string, senha: string) {

        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.filmesFavoritos = [];
        this.seriesFavoritas = [];
        this.avaliacoes = [];
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
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

    public listarFavoritos(): string {
        
        let favoritos = 'Filmes Favoritos:\n';
        for (const filme of this.filmesFavoritos) {
            favoritos += `${filme.toString()}\n`;
        }

        favoritos += 'Séries Favoritas:\n';
        for (const serie of this.seriesFavoritas) {
            favoritos += `${serie.toString()}\n`;
        }

        return favoritos;
    }
}