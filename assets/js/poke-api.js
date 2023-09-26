const pokeapi = {};

function covertPokeApiDetailToPokemon(pokeDatail) {
  const pokemon = new Pokemon();
  pokemon.name = pokeDatail.name;
  pokemon.number = pokeDatail.id;
  const types = pokeDatail.types.map(typeSlot => typeSlot.type.name);
  const [type] = types;
  pokemon.types = types;
  pokemon.type = type;
  pokemon.photo = pokeDatail.sprites.other.dream_world.front_default;
  return pokemon;
} 

pokeapi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
          .then(response => response.json())
          .then(covertPokeApiDetailToPokemon);
}

pokeapi.getPokemons = (offset = 0, limit = 8) => {
const url = `http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
return fetch(url)
  .then(response => response.json())
  .then(jsonBody => jsonBody.results)
  .then(pokemons => pokemons.map(pokeapi.getPokemonDetail))
  .then(requestDetail => Promise.all(requestDetail))
  .then(pokeDatail =>pokeDatail)
  .catch(error => console.error(error));
}

