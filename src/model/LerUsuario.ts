import Usuario from "./Usuario.js"

export default class LerUsuario {

    private parserUsuario(user: any, id: number): Usuario {
        // formata um usuario e o retorna
        return new Usuario(id, user.email, user.senha, user.nome, user.filmesFavoritos,
                            user.seriesFavoritas, user.avaliacoes);
    }

    public async lerArquivo() {
        // A função retorna um array com os usuarios já formatados
        let usuarios: any = [];
        
        const res = await fetch("../assets/usuarios.json");
        const json =     await res.json();

        // percorre todo o array do json formatado
        for(let i = 0; i < json.length; i++) {
            /** Aqui, ao percorrer cada objeto, ou seja um usuario, chama a
             * função para formatar ele e o adiciona no array de usuarios
             * 
             * o parâmetro i se tornará o ID do usuario, na função parserUsuario
            */
            usuarios[i] = this.parserUsuario(json[i], i);
        }
    
        return usuarios;
    }

/*     public escreverArquivo(usuarios: Array<Usuario>): void {
        // formata o array de usuarios em json
        let usuariosFormatadosEmJson = JSON.stringify(usuarios, null, 2);

        // sobreescreve o conteúdo do arquivo com o conteudo novo, ou seja
        // usuariosFormatadosEmJson
        // recebe como parâmetro o caminho do arquivo a ser sobreescrito e 
        // os dados a serem inscritos no arquivo
        fs.writeFile("../assets/usuarios.json", usuariosFormatadosEmJson, (err) => {
            if(err) {
                console.error("Erro ao salvar o arquivo:", err);
            }
        });
    } */
}