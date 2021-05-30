const pokemons = getPokeData();
const div = document.querySelector('.div');
const header = createElements('header', div, null, null);

function creationOfHeader() {
  const titleImportant = createElements('h1', header, null, 'Pokemon Details');

  const pokeName = new URLSearchParams(window.location.search).get('name');
  const pokemons = (`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  const pokeNameDetails = createElements('h3', header, null, `${pokeName}`);
  paintDetailsOfPokemonClicked(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
}

const paintDetailsOfPokemonClicked = (url) => fetch(url)
  .then((response) => response.json())
  .then((data) => {
    createElements('li', header, null, `height: ${data.height}`);
    createElements('li', header, null, `weight: ${data.weight}`);
    createElements('li', header, null, `order: ${data.order}`);
    createElements('li', header, null, `hability: ${data.abilities[0].ability.name}`);
    const pokemonImg = createElements('img', header, null, `${data.sprites.back_default}`);
    const pokemonImg2 = createElements('img', header, null, `${data.sprites.front}`);
    pokemonImg.src = data.sprites.front_default;
    pokemonImg2.src = data.sprites.back_default;
  });
