import { BaseController } from "./BaseController"


export class LoginController extends BaseController {

    private title = this.createElement("h2", "Plase Login")
    private userName = this.createElement("label", "Username")
    private userNameInput = this.createElement("input")
    private br = this.createElement("br")
    private password = this.createElement("label", "Password")
    private passwordInput = this.createElement("input")
    private br2 = this.createElement("br")
    private errorLabel = this.createElement("label")
    private loginButton = this.createElement("button", "Login", () => {
        if(!this.userNameInput.value || !this.passwordInput.value) {
           this.showErrorLabel("Please fill both fields")
            return
        }
        this.resetErrorLabel()
    })

    private resetErrorLabel() {
        this.errorLabel.style.color = "red"
        this.errorLabel.style.visibility = "hidden"
    }
    private showErrorLabel(errorMessage: string) {
        this.errorLabel.innerText = errorMessage
        this.errorLabel.style.visibility = "visible"
    }

    public createView(): HTMLDivElement {
        this.passwordInput.type = "Password"
        this.resetErrorLabel()
        return this.container
    }
}