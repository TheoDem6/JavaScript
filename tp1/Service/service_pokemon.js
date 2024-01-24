const Pokemon = require('../model/model_pokemon');


function  getAll() {
    return Pokemon;
}

function  getById(id) {

    for (let i = 0; i < Pokemon.length; i++) {
        if (Pokemon[i].id == id) {
          return Pokemon[i];
        }
      }
      // Retourner null si le Pokémon n'est pas trouvé
      return null;
}

function  create(pokemonData) {
    const pokemon = new Pokemon(pokemonData);
    return pokemon.save();
}

function  update(id, pokemonData) {
    return Pokemon.findByIdAndUpdate(id, pokemonData, { new: true });
}
function searchByHP(hpValue) {
    //console.log(hpValue);
    const matchingPokemon = pokemonArray.filter(pokemon => pokemon.base.HP === hpValue);
    return matchingPokemon;
  }

module.exports = { getAll,getById,create,update,searchByHP};
