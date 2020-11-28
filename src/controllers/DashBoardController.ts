import { AccessRight, SessionToken } from "../Models/AuthenticationModels";
import { BaseController } from "./BaseController";


export class DashBoardController extends BaseController {

    private sessionToken: SessionToken | undefined
    private searchArea: HTMLInputElement | undefined
    private searchResultArea: HTMLDivElement | undefined

    public setSessionToken(sessionToken: SessionToken) {
        this.sessionToken = sessionToken
    }

    public createView(): HTMLDivElement {
        const title  = this.createElement("h2", "DashBoard controller")
        if(!this.sessionToken) {
            this.createElement("label", "Please go to the private parts of this Api!")
        } else {
            this.createElement("label", `Welcome ${this.sessionToken?.username}`)
            this.createElement("br")
            this.generateButtons()
        }
        return this.container
    }

    private generateButtons() {
        if(!this.sessionToken) return
        for(const access of this.sessionToken.accessRight) {
            this.createElement("button", AccessRight[access], async () => {
                await this.triggerAction(access)
            })
        }
        if(this.sessionToken.accessRight.includes(AccessRight.READ)) {
            this.createElement("br")
            this.createElement("label", "Search: ")
            this.searchArea = this.createElement("input")
            this.searchResultArea = this.createElement("div")
            this.createElement("br")
        }
    }

    private async triggerAction(access: AccessRight) {
        console.log(`Button ${access} clicked!`)
        switch (access) {
            case AccessRight.READ:
                
                break;
        
            default:
                break;
        }
    }
}