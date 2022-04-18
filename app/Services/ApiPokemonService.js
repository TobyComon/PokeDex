import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonApi } from "./AxiosService.js";




class ApiPokemonService {
    async setActivePokemon(pokemonIndex) {
        const res = await pokemonApi.get('pokemon/' + pokemonIndex)
        ProxyState.activePokemon = new Pokemon(res.data)
    }

    async getApiPokemon() {
        const res = await pokemonApi.get('pokemon')
        console.log('api pokemon res', res.data);
        ProxyState.pokemon = res.data.results
    }

}


export const apiPokemonService = new ApiPokemonService()