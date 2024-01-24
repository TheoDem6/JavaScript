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
    const tabPokemon = [];
    for (let i  = 0; i < Pokemon.length;i++){
        if (Pokemon[i].base.HP == hpValue){
            tabPokemon.push(Pokemon[i]);
        }
    }
    
    return tabPokemon;
  }

  function searchByName(nomValue) {
    const tabPokemon = [];
    console.log(nomValue);
    for (let i  = 0; i < Pokemon.length;i++){
        if (Pokemon[i].name.french == nomValue){
            tabPokemon.push(Pokemon[i]);
        }
    }
    
    return tabPokemon;
  }
  function searchByType(typeValue) {
    const tabPokemon = [];
    console.log(typeValue);
    for (let i  = 0; i < Pokemon.length;i++){
        for (let j = 0; j<Pokemon[i].type.length;j++){
            if(Pokemon[i].type[j] == typeValue){
                tabPokemon.push(Pokemon[i]);
            }
        }
    }
    
    return tabPokemon;
  }

module.exports = { getAll,getById,create,update,searchByHP,searchByName,searchByType};
