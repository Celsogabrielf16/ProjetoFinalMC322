import { Ator } from "./Ator"

export default class Elenco {
    private listaDeAtores: Array<Ator>;

    constructor(atores: Array<Ator>) {
        this.listaDeAtores = atores;
    }

    public listarAtores() {
        return this.listaDeAtores;
    }
}
