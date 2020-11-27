import { LoginService } from "../services/LoginService"
import { BaseController } from "./BaseController"


export class LoginController extends BaseController {

    private loginService = new LoginService()

    private title = this.createElement("h2", "Plase Login")
    private userName = this.createElement("label", "Username")
    private userNameInput = this.createElement("input")
    private br = this.createElement("br")
    private password = this.createElement("label", "Password")
    private passwordInput = this.createElement("input")
    private br2 = this.createElement("br")
    private loginButton = this.createElement("button", "Login", async () => {
        if(!this.userNameInput.value || !this.passwordInput.value) {
            this.showErrorLabel("Please fill both fields")
            return
        }
        this.resetErrorLabel()
        const result= await this.loginService.login(this.userNameInput.value, this.passwordInput.value)
        if(!result) { 
            this.showErrorLabel("Wrong username or password")
            return
        }
        this.router.switchToDashBoardView(result)
    })
    private br3 = this.createElement("br")
    private errorLabel = this.createElement("label")

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