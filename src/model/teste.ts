import * as fs from 'fs';


function escreverArquivo(midias: any): void {
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
}

let teste = [{
              'nome': 'guilherme',
              'idade': '11/01/2001'
            }];



escreverArquivo(teste);