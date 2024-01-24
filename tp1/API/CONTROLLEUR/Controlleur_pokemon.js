const express = require('express');
const router = express.Router();
const PokemonService = require('../../Service/service_pokemon');

router.get('/API/V1/POKEMON', async (req, res) => {
  const pokemons =  PokemonService.getAll();
  res.json(pokemons);
});
router.get('/API/V1/POKEMON/search', async (req, res) => {
    const hpValue = parseInt(req.query.hp);  
    const typeValue = req.query.type;  
    const nomValue = req.query.nom; 
    console.log("test",typeValue);
    console.log(req.query);
    
    let pokemon = [];

    if(!isNaN(hpValue)){
        console.log("marche stp 1");
         pokemon = PokemonService.searchByHP(hpValue);
    }else if (typeValue != undefined){
        console.log("marche stp 2");
         pokemon = PokemonService.searchByType(typeValue);
    }else{
        console.log("marche stp 3 ");
         pokemon = PokemonService.searchByName(nomValue);
    }
  
    res.json(pokemon);
  });
  

router.get('/API/V1/POKEMON/:id', async (req, res) => {
  const pokemon =  PokemonService.getById(req.params.id);

  res.json(pokemon);
});




module.exports = router;
