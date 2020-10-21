import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "../Services/AxiosService.js"

class ApiPokemonService {
    constructor() {
        console.log("service");
    }
}


export const apiPokemonService = new ApiPokemonService();