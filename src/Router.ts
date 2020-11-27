import { DashBoardController } from "./controllers/DashBoardController";
import { LoginController } from "./controllers/LoginController";
import { MainController } from "./controllers/MainController";
import { SessionToken } from "./Models/AuthenticationModels";


export class Router {

    private mainElement = document.getElementById("main-container")

    public handleRequest() {
        console.log("Handling request for: " + this.getRoute())

        switch (this.getRoute()) {
            case "/login":
                    this.switchToLoginView()
                break;

            case "/board": 
                    this.switchToDashBoardView(undefined)
                break
            default:
                if(this.mainElement){
                    const mainController: MainController = new MainController(this)
                    this.mainElement.append(mainController.createView())
                }
                break;
        }
    }

    public switchToDashBoardView(sessionToken: SessionToken | undefined){
        if(this.mainElement) {
            this.mainElement.innerHTML = ""
            const dashBoardController = new DashBoardController(this)            
            if(sessionToken) dashBoardController.setSessionToken(sessionToken)
            this.mainElement.append(dashBoardController.createView())
        } 
    }

    public switchToLoginView() {
        if(!this.mainElement) return
        this.mainElement.innerHTML = ""
        const loginController: LoginController = new LoginController(this)
        this.mainElement?.append(loginController.createView())
    }

    private getRoute(): string {
        return window.location.pathname
    }
}