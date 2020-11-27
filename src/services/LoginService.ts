import { SessionToken } from "../Models/AuthenticationModels";


export class LoginService {

    public async login(userName: string, password: string): Promise<SessionToken | undefined> {
        if(userName === "user" && password === "1234") {
            return { username: "Dummy user"} as any 
        }
        return undefined
    }
}