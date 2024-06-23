import BaseDeMidiaController from "./Controllers/BaseDeMidiaController.js";
import BaseDeUsuarioController from "./Controllers/BaseDeUsuarioController.js";

class LeadingPage {
    constructor () {
        let baseMidia = new BaseDeMidiaController();
        let baseUsuario = new BaseDeUsuarioController();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LeadingPage();
});