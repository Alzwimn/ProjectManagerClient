import { User } from "../Models/DataModels"

const baseUrl = "http://localhost:8080"
const userUrl = baseUrl + "/users"

export class DataService {  

    public async getUsers(authorization: string, nameQuery: string): Promise<User[]> {
        const url = userUrl + "?name=" + nameQuery
        const options = {
            method: "GET",
            headers: {
                Authorization: authorization
            }
        }
        const result = await fetch(url, options)
        const resultJson = await result.json()
        return resultJson
    }
    
}   