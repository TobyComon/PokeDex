import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"
import { apiPokemonService } from "../Services/ApiPokemonService.js"



function _drawPokemon() {
    let template = ''
    ProxyState.pokemon.forEach(p => template += /*html*/ `<li onclick="app.apiPokemonController.setActivePokemon('${p.index}')" class="selectable">${p.name}</li>`)
    document.getElementById('api-pokemon').innerHTML = template
}


function _drawActivePokemon() {
    if (!ProxyState.activePokemon){
        document.getElementById('active-pokemon').innerHTML = ''
    } else {
        document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.Template
    }
}

export class ApiPokemonController {
    constructor(){
        this.getApiPokemon()
        ProxyState.on('pokemon', _drawPokemon)
        ProxyState.on('active-pokemon', _drawActivePokemon)
    }

    getApi(){
        apiPokemonService.getApiPokemon()
    }
    async getApiPokemon(){
        try {
            await apiPokemonService.getApiPokemon()
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.log(error);
        }
    }

    async setActivePokemon(pokemonIndex) {
        try {
            await apiPokemonService.setActivePokemon(pokemonIndex)
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.log(error);
        }
    }

}