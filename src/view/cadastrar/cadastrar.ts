import BaseDeUsuarioController from "../../Controllers/BaseDeUsuarioController.js";

class Cadastrar {
    private baseDeUsuarioController: BaseDeUsuarioController;
    private submitButton: HTMLElement;
    private itemPassword: HTMLElement;
    private nameInput: HTMLInputElement;
    private emailInput: HTMLInputElement;
    private senhaInput: HTMLInputElement;

    constructor (baseDeUsuarioController: BaseDeUsuarioController) {
        this.baseDeUsuarioController = baseDeUsuarioController;

        this.submitButton = document.getElementById("submitButton") as HTMLElement;
        this.itemPassword = document.getElementById("itemPassword") as HTMLElement;

        this.nameInput = document.getElementById("name") as HTMLInputElement;
        this.emailInput = document.getElementById("email") as HTMLInputElement;
        this.senhaInput = document.getElementById("password") as HTMLInputElement;

        this.addEventListeners();
    }

    private addEventListeners(): void {
        this.submitButton.addEventListener('click', this.onClick.bind(this));
    }

    private onClick(): void {
        this.itemPassword.classList.remove("form__item--error");
        let autenticou = this.baseDeUsuarioController.cadastrarUsuario(this.nameInput.value, this.emailInput.value, this.senhaInput.value);

        if(autenticou) {
            window.location.href = `/src/view/home/home.html`;
        } else {
            this.itemPassword.classList.add("form__item--error");
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let baseDeUsuarioController: BaseDeUsuarioController = new BaseDeUsuarioController();
    new Cadastrar(baseDeUsuarioController);
});