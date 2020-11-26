

export class MainController {

    public createView(): HTMLDivElement {
        const container = document.createElement("div")

        const title = document.createElement("h2")
        title.innerHTML = "Welcome to our Main Page!!"

        const article = document.createElement("div")
        article.innerHTML = "This is a long text, and you shall not doubt me!"

        const button = document.createElement("button")
        button.innerText = "Login"
        
        container.append(title, article, button)

        return container
    }
}