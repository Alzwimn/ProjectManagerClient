import { AccessRight, SessionToken } from "../Models/AuthenticationModels";
import { User } from "../Models/DataModels";
import { DataService } from "../services/DataService";
import { BaseController } from "./BaseController";


export class DashBoardController extends BaseController {

    private sessionToken: SessionToken | undefined
    private searchArea: HTMLInputElement | undefined
    private searchResultArea: HTMLDivElement | undefined
    private dataService: DataService = new DataService()

    private selectedUser: User | undefined
    private selectedLabel: HTMLLabelElement | undefined

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
                const users = await this.dataService.getUsers(
                    this.sessionToken!.tokenId, this.searchArea!.value
                )
                for(const user of users) {
                    const label = this.createElement("label", JSON.stringify(user))
                    label.onclick = () => {
                        label.classList.toggle("seletedLabel")
                        this.selectedUser = user
                        this.selectedLabel = label
                    }
                    this.searchResultArea!.append(label)
                    this.searchResultArea!.append(
                        document.createElement("br")
                    ) 
                }
                break;
            case AccessRight.DELETE: 
                if(!this.selectedUser) break
                await this.dataService.deleteUser(
                    this.sessionToken!.tokenId, this.selectedUser
                ) 
                this.selectedLabel!.innerHTML = ""   
                break
            default:
                break;
        }
    }
}