import { ApiPokemonController } from "./Controllers/ApiPokemonController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // myPokemonController = new myPokemonController()
  apiPokemonController = new ApiPokemonController()
}

window["app"] = new App();
