import { BaseController } from "./BaseController"


export class MainController extends BaseController {

    public createView(): HTMLDivElement {
        const title = this.createElement("h2", "Welcome to our Main Page!!")

        const article = this.createElement("div", "This is a long text, and you shall not doubt me!")

        const button = this.createElement("button", "Login", () => {
            this.router.switchToLoginView()
        })
        
        return this.container
    }
}