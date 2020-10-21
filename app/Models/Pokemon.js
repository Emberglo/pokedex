export default class Pokemon {

    constructor(data) {
        this.name = data
        this.img = data
        this.order = data
        this.height = data
        this.weight = data
        this.type = data
        this.id = data


    }

    get Template() {
        return /*html*/ `<div class="card">
            <div class="card-body">
                <h2>${this.name}</h2>
                <img src="${this.img}" alt="">
                <h4>Type: ${this.type}</h4>
                <h4>Order: ${this.order}</h4>
                <h4>Height: ${this.height}ft</h4>
                <h4>Weight: ${this.weight}lbs</h4>
            </div>
        </div>`
    }
}