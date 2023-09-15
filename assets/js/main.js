const offset = 0;
const limit = 10;
const pokemonsList = document.getElementById("pokemonsList");
console.log("Cheguei no main");

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
          <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
          </ol>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Pokemon ${pokemon.name}" >
        </div>
    </li>
  `
};

pokeapi.getPokemons().then((pokemons = []) => {

  const listPokemons = pokemons.map(pokemon => convertPokemonToLi(pokemon));
  const removeComma = listPokemons.join('');
  pokemonsList.innerHTML += removeComma;
});
