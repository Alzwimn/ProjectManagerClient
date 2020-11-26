

export class LoginController {

    public createView(): HTMLDivElement {
        const container = document.createElement("div")

        const title = document.createElement("h2")
        title.innerText = "Please Login"

        const userName = document.createElement("label")
        userName.innerText = "Username"

        const userNameInput = document.createElement("input")

        const breakElemnt = document.createElement("br")
        const breakElemnt2 = document.createElement("br")

        const password = document.createElement("label")
        password.innerText = "Password: "

        const passwordInput = document.createElement("input")
        passwordInput.type = "Password"

        const loginButton = document.createElement("button")
        loginButton.innerText = "Login"

        container.append(
            title,
            userName,
            userNameInput,
            breakElemnt,
            password,
            passwordInput,
            breakElemnt2,
            loginButton
        )
        return container
    }
}