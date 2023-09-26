const pokemonsList = document.getElementById("pokemonsList");
const showMoreButton = document.getElementById("showMoreButton");

const limit = 5;
let offset = 0;
const maxRecords = 151;

function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map(typeSlot => `<li class="type">${typeSlot.type.name}</li>`);
};

function loadPokemonItens(offset, limit) {
  pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonsList.innerHTML += pokemons.map(pokemon => `
      <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="Pokemon ${pokemon.name}" >
          </div>
      </li>
    `).join('');
  });
};

loadPokemonItens(offset, limit);

showMoreButton.addEventListener('click', () => {
  offset += limit;
  const recordsWithNextPage = offset + limit;

  if (recordsWithNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    showMoreButton.parentElement.removeChild(showMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
