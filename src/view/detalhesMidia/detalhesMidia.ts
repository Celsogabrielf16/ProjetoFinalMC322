console.log("Detalhes Midia Works!");

fetch("/dist/assets/midia.json")
    .then(res => res.json())
    .then(listaMidias => {
        const sliderFilmsElement: HTMLElement = document.getElementById("slider-films") as HTMLElement;
        const sliderSeriesElement: HTMLElement = document.getElementById("slider-series") as HTMLElement;

        console.log(listaMidias);
        let contador = 0;
        
        if (sliderFilmsElement != null && sliderSeriesElement != null) {
            listaMidias.forEach((midia: any) => {
                sliderFilmsElement.innerHTML += `
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
    })