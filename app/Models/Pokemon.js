export class Pokemon{
    constructor(data) {
        this.name = data.name
        this.url = data.url

    }
    get Template() {
        return /*html*/`
        <div class="bg-grey shadow rounded p-3">
            <h1>${this.name}</h1>
            <a href="${this.url}">Details</a>
        </div>   
        
        
        
        `
    }
}

