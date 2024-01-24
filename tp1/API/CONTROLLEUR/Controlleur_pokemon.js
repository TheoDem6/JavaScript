const express = require('express');
const router = express.Router();
const PokemonService = require('../../Service/service_pokemon');

router.get('/API/V1/POKEMON', async (req, res) => {
  const pokemons =  PokemonService.getAll();
  res.json(pokemons);
});
router.get('/API/V1/POKEMON/search', async (req, res) => {
    const hpValue = parseInt(req.query);  
    console.log(req.query.hp);
  
    const pokemon = PokemonService.searchByHP(hpValue);
  
    res.json(pokemon);
  });
  

router.get('/API/V1/POKEMON/:id', async (req, res) => {
  const pokemon =  PokemonService.getById(req.params.id);

  res.json(pokemon);
});




module.exports = router;
