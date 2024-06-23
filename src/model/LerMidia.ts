import Filme from "./Filme.js"
import Serie from "./Serie.js"

export default class LerMidia {

    private parserMidia(midia: any, id: number): Filme | Serie {
        // formata um filme e o retorna
        if(midia.tipo == "Filme") {
            return new Filme(id, midia.titulo, midia.sinopse, midia.anoLancamento,
                midia.faixaEtaria, midia.elenco, midia.categorias, midia.avaliacoes,
                midia.imagemCapa, midia.imagemBanner, midia.imagemLogo, 
                midia.diretor, midia.duracao);
        }

        // formata uma série e a retorna
        else {
            return new Serie(id, midia.titulo, midia.sinopse, midia.anoLancamento,
                midia.faixaEtaria, midia.elenco, midia.categorias, midia.avaliacoes,
                midia.imagemCapa, midia.imagemBanner, midia.imagemLogo, 
                midia.temporadas, midia.diretores);
        }
    }

    public async lerArquivo() {
        // A função retorna um array com as mídias já formatadas
        let midias = [];
        
        const res = await fetch("/src/assets/midia.json");
        const json = await res.json();

        // percorre todo o array do json formatado
        for(let i = 0; i < json.length; i++) {
            /** Aqui, ao percorrer cada objeto, ou seja uma mídia, chama a
             * função para formatar ela e a adiciona no array de midias
             * 
             * o parâmetro i se tornará o ID da mídia, na função parserMidia
            */
            if(json[i] != null){
               midias[i] = this.parserMidia(json[i], i);
            }
        }
    
        return midias;
    }

/*     public escreverArquivo(midias: Array<Filme | Serie>): void {
        // formata o array de midias em json
        let midiasFormatadasEmJson = JSON.stringify(midias, null, 2);

        // sobreescreve o conteúdo do arquivo com o conteudo novo, ou seja
        // midiasFormatadasEmJson
        // recebe como parâmetro o caminho do arquivo a ser sobreescrito e 
        // os dados a serem inscritos no arquivo
        fs.writeFile("../assets/midia.json", midiasFormatadasEmJson, (err) => {
            if(err) {
                console.error("Erro ao salvar o arquivo:", err);
            }
        });
    } */
}