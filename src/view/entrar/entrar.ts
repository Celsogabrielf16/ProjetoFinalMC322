import BaseDeUsuarioController from "../../Controllers/BaseDeUsuarioController.js";

class Entrar {
    private baseDeUsuarioController: BaseDeUsuarioController;
    private submitButton: HTMLElement;
    private emailInput: HTMLInputElement;
    private senhaInput: HTMLInputElement;

    constructor (baseDeUsuarioController: BaseDeUsuarioController) {
        this.baseDeUsuarioController = baseDeUsuarioController;

        this.submitButton = document.getElementById("submitButton") as HTMLElement;
        this.emailInput = document.getElementById("email") as HTMLInputElement;
        this.senhaInput = document.getElementById("password") as HTMLInputElement;

        this.addEventListeners()
    }

    private addEventListeners(): void {
        this.submitButton.addEventListener('click', this.onClick.bind(this));
    }

    private onClick(): void {
        this.baseDeUsuarioController.autenticarUsuario(this.emailInput.value, this.senhaInput.value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let baseDeUsuarioController: BaseDeUsuarioController = new BaseDeUsuarioController();
    new Entrar(baseDeUsuarioController);
});