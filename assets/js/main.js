const offset = 0;
const limit = 10;
const url = `http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokemonsList = document.getElementById("pokemonsList");

function convertPokemonToLi(pokemon, pokemon_number) {
  return `
    <li class="pokemon">
        <span class="number">${pokemon_number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
          <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
          </ol>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon_number}.svg" alt="Pokemon ${pokemon.name}" >
        </div>
    </li>
  `
}

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemons) => {
    for (let i = 1; i <= pokemons.length; i++ ) {
      const pokemon = pokemons[i];
      pokemonsList.innerHTML += convertPokemonToLi(pokemon, i);
    }
  })
  .catch((error) => console.error(error));
