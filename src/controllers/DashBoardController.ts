import { SessionToken } from "../Models/AuthenticationModels";
import { BaseController } from "./BaseController";


export class DashBoardController extends BaseController {

    private sessionToken: SessionToken | undefined

    public setSessionToken(sessionToken: SessionToken) {
        this.sessionToken = sessionToken
    }

    public createView(): HTMLDivElement {
        const title  = this.createElement("h2", "DashBoard controller")
        if(!this.sessionToken) {
            this.createElement("label", "Please go to the private parts of this Api!")
        } else {
            this.createElement("label", `Welcome ${this.sessionToken?.username}`)
        }
        

        return this.container
    }
}