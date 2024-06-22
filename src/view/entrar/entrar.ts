import BaseDeUsuarioController from "../../Controllers/BaseDeUsuarioController.js";

class Entrar {
    private baseDeUsuarioController: BaseDeUsuarioController;
    private submitButton: HTMLElement;
    private itemPassword: HTMLElement;
    private emailInput: HTMLInputElement;
    private senhaInput: HTMLInputElement;

    constructor (baseDeUsuarioController: BaseDeUsuarioController) {
        this.baseDeUsuarioController = baseDeUsuarioController;

        this.submitButton = document.getElementById("submitButton") as HTMLElement;
        this.itemPassword = document.getElementById("itemPassword") as HTMLElement;
        this.emailInput = document.getElementById("email") as HTMLInputElement;
        this.senhaInput = document.getElementById("password") as HTMLInputElement;

        this.addEventListeners()
    }

    private addEventListeners(): void {
        this.submitButton.addEventListener('click', this.onClick.bind(this));
    }

    private onClick(): void {
        this.itemPassword.classList.remove("form__item--error");
        let autenticou = this.baseDeUsuarioController.autenticarUsuario(this.emailInput.value, this.senhaInput.value);

        if(autenticou) {
            window.location.href = `/src/view/home/home.html`;
        } else {
            this.itemPassword.classList.add("form__item--error");
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let baseDeUsuarioController: BaseDeUsuarioController = new BaseDeUsuarioController();
    new Entrar(baseDeUsuarioController);
});