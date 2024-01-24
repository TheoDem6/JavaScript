const express = require('express');

const pokemonController = require('../CONTROLLEUR/Controlleur_pokemon');

const app = express();
const PORT = 3000;


app.use('/', pokemonController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
