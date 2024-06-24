import BaseDeUsuarioController from "../../Controllers/BaseDeUsuarioController.js";
import BaseDeMidiaController from "./../../Controllers/BaseDeMidiaController.js";

class Home {
    private baseMidia;
    private baseUsuario;
    public nomeUsuario;

    constructor () {
        this.baseMidia = new BaseDeMidiaController();
        this.baseUsuario = new BaseDeUsuarioController();

        this.nomeUsuario = this.recebeNomeUsuario();

        this.preencherTela();
    }

    private recebeNomeUsuario() {
        let nome = window.location.search.split("=")[1]
        return nome;
    }

    private preencherTela() {
        const nomeUsuario: HTMLElement = document.getElementById("nomeUsuario") as HTMLElement;
        if (nomeUsuario != null)
            nomeUsuario.innerHTML = `${this.nomeUsuario}`;
        
        

        this.baseMidia.getListaMidiaPromise().then(listaMidias => {
            const sliderFilmsElement: HTMLElement = document.getElementById("slider-films") as HTMLElement;
            const sliderSeriesElement: HTMLElement = document.getElementById("slider-series") as HTMLElement;
            const loading: HTMLElement = document.getElementById("loading") as HTMLElement;
    
            let contador = 0;

            let listaFilmes = listaMidias.slice(0, 8);
            let listaSeries = listaMidias.slice(8, 16);
            
            if (sliderFilmsElement != null && sliderSeriesElement != null) {
                listaFilmes.forEach((midia: any) => {
                    sliderFilmsElement.innerHTML += `
                    <div class="keen-slider__slide">
                        <a class="card__link" href="/src/view/detalhesMidia/detalhesMidia.html?id=${contador}">
                            <img class="card__img" src="./../..${midia.imagemCapa}" alt="${midia.titulo}">
                            <div class="card__informations">
                                <h3 class="card__title">${midia.titulo}</h3>
                                <div class="card__details">
                                    <div class="details__rating">
                                        ${midia.calculaMediaDasAvaliacoes(midia.getAvaliacoes())}
                                        <img src="/src/assets/icons/estrelaCheia.png" alt="">
                                    </div>
                                    <div class="details__separator"></div>
                                    <div>${midia.anoLancamento}</div>
                                    <div class="details__separator"></div>
                                    <div>${midia.faixaEtaria}</div>
                                </div>
                                <p class="card__synopsis">${midia.sinopse}</p>
                            </div>
                        </a>
                    </div>`
                contador++;
                });

                listaSeries.forEach((midia: any) => {
                    sliderSeriesElement.innerHTML += `
                    <div class="keen-slider__slide">
                        <a class="card__link" href="/src/view/detalhesMidia/detalhesMidia.html?id=${contador}">
                            <img class="card__img" src="./../..${midia.imagemCapa}" alt="${midia.titulo}">
                            <div class="card__informations">
                                <h3 class="card__title">${midia.titulo}</h3>
                                <div class="card__details">
                                    <div class="details__rating">
                                        ${Math.floor(Math.random() * 5)}
                                        <img src="/src/assets/icons/estrelaCheia.png" alt="">
                                    </div>
                                    <div class="details__separator"></div>
                                    <div>${midia.anoLancamento}</div>
                                    <div class="details__separator"></div>
                                    <div>${midia.faixaEtaria}</div>
                                </div>
                                <p class="card__synopsis">${midia.sinopse}</p>
                            </div>
                        </a>
                    </div>
                `
                contador++;
                });
            }
    
            // @ts-ignore
            let sliderFilms = new KeenSlider("#slider-films", {
                loop: true,
                mode: "free-snap",
                dragSpeed: 0.3,
                slides: {
                  perView: 5,
                },
              })
            
            // @ts-ignore
            let sliderSeries = new KeenSlider("#slider-series", {
                loop: true,
                mode: "free-snap",
                dragSpeed: 0.3,
                slides: {
                    perView: 5,
                },
                })
                loading.style.display = 'none';
                loading.style.position = 'static';
        })
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    new Home();
});