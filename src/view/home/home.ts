console.log("Home Works!");

// @ts-ignore
let slider = new KeenSlider("#my-keen-slider", {
    loop: true,
    mode: "free-snap",
    slides: {
        perView: 4.5,
        spacing: 15,
    },
})