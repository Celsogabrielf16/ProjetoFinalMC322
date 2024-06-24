import Filme from "../../model/Filme.js";
import Serie from "../../model/Serie.js";
import BaseDeMidiaController from "./../../Controllers/BaseDeMidiaController.js";

class DetalhesDaMidia {
    private baseMidia;
    private idMidia;

    constructor () {
        this.baseMidia = new BaseDeMidiaController();

        this.idMidia = this.recebeIdMidia()
        this.preencherTela();
    }

    private recebeIdMidia() {
        let idString = window.location.search.split("=")[1]
        return parseInt(idString);
    }

    private preencherTela() {
        this.baseMidia.getListaMidiaPromise().then(listaMidias => {
            const card01: HTMLElement = document.getElementById("card01") as HTMLElement;
            const card02: HTMLElement = document.getElementById("card02") as HTMLElement;
            const card03: HTMLElement = document.getElementById("card03") as HTMLElement;

            let midia = listaMidias[this.idMidia];
            console.log(midia);
            

            let diretores;
            if(midia instanceof Filme) {
                diretores = midia.getDiretor();
            } else {
                diretores = midia.listarDiretores();
            }
            
            if (card01 != null) {
                    card01.innerHTML += `
                    <img class="informations__img" src="./../..${midia.getImagemLogo()}" alt="">
                <div class="informations__details">
                    <div class="details__rating">
                        ${midia.calculaMediaDasAvaliacoes([])}
                        <img src="/src/assets/icons/estrelaCheia.png" alt="">
                    </div>
                    <div class="details__separator"></div>
                    <div>${midia.getAnoLancamento()}</div>
                    <div class="details__separator"></div>
                    <div>${midia.getFaixaEtaria()}</div>
                    <div class="details__separator"></div>
                    <div>${midia.listarCategorias()}</div>
                </div>
                <div class="informations__synopsis">
                    ${midia.getSinopse()}
                </div>
                <div class="informations__cast">
                    <h6 class="cast-title">Elenco:</h6>
                    <ul class="cast-list">
                        <li>${
                            // @ts-ignore 
                            midia.getElenco()[0].nome
                        } como <b>
                        ${  
                            // @ts-ignore 
                            midia.getElenco()[0].papel
                        }</b></li>
                        <li>${
                            // @ts-ignore 
                            midia.getElenco()[1].nome
                        } como <b>
                        ${  
                            // @ts-ignore 
                            midia.getElenco()[1].papel
                        }</b></li>
                        <li>${
                            // @ts-ignore 
                            midia.getElenco()[2].nome
                        } como <b>
                        ${  
                            // @ts-ignore 
                            midia.getElenco()[2].papel
                        }</b></li>
                        <li>${
                            // @ts-ignore 
                            midia.getElenco()[3].nome
                        } como <b>
                        ${  
                            // @ts-ignore 
                            midia.getElenco()[3].papel
                        }</b></li>
                    </ul>
                </div>
                `
            }

            if (card02 != null) {
                card02.innerHTML += `
                <h1 class="rating">${midia.calculaMediaDasAvaliacoes([])}</h1>
                <h6 class="rating-number">${midia.getAvaliacoes().length} Avaliações</h6>`
            }

            if (card03 != null) {
                let avaliacoes = '';
                midia.getAvaliacoes().forEach(avaliacao => {
                    console.log(avaliacao + 'vbxcvbx');
                })

                card03.innerHTML += `
                <h2 class="card-rating card-rating__rating-number">${midia.getAvaliacoes().length} Avaliações</h2>
                    <div class="ratings">
                        <div class="rating">
                            <div class="name-date">
                                <h5 class="name">Celso Gabriel Prado</h5>
                                <h6 class="date">Out 16</h6>
                            </div>
                            <div class="rating-value">
                                4.5
                                <img src="/src/assets/icons/estrelaCheia.png" alt=""></div>
                            <div class="comment">
                                A trama de "One Piece" é cheia de reviravoltas surpreendentes e personagens cativantes.
                            </div>
                        </div>
                        <div class="rating__separator"></div>
                        <div class="rating">
                            <div class="name-date">
                                <h5 class="name">Celso Gabriel Prado</h5>
                                <h6 class="date">Out 16</h6>
                            </div>
                            <div class="rating-value">
                                4.5
                                <img src="/src/assets/icons/estrelaCheia.png" alt=""></div>
                            <div class="comment">
                                A trama de "One Piece" é cheia de reviravoltas surpreendentes e personagens cativantes.
                            </div>
                        </div>
                    </div>`
            }
        })
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    new DetalhesDaMidia();
});