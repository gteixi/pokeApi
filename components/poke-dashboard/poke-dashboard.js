let init = 0;
const max = 10;
const pokemons = getPokeData(init, max);
const div = document.querySelector('.div');

function creationOfHeader() {
  const header = createElements('header', div, null, null);
  const titleImportant = createElements('h1', header, 'title', 'Important Pokemons');
  divListPokemons();
}

function divListPokemons() {
  const divForList = createElements('div', div, 'divForList', null);
  const titleList = createElements('h2', divForList, null, 'Choose your Pokemon');
  const ulListPokemons = createElements('ul', divForList, null, null);
  const buttonPrev = createElements('button', divForList, null, 'Previous');
  const buttonNext = createElements('button', divForList, null, 'Next');
  pokemons.then((list) => {
    list.results.slice(init, max).forEach((pokemon) => {
      const listImportantPokemons = createElements('li', ulListPokemons, 'pokemons', null);
      const AnchorImportantPokemons = createElements('a', listImportantPokemons, null, `${pokemon.name}`);
      AnchorImportantPokemons.setAttribute('href', `http://127.0.0.1:5500/pokemons/components/poke-details/?name=${pokemon.name}`);
      buttonNext.onclick = () => nextPokemons(ulListPokemons);
      buttonPrev.onclick = () => prevPokemons(ulListPokemons);
    });
  });
}

function nextPokemons(ulListPokemons) {
  init += 10;
  ulListPokemons.innerText = '';
  getPokeData(init, 10).then((list) => {
    list.results.forEach((pokemon) => {
      const listImportantPokemons = createElements('li', ulListPokemons, 'pokemons', null);
      const AnchorImportantPokemons = createElements('a', listImportantPokemons, null, `${pokemon.name}`);
      AnchorImportantPokemons.setAttribute('href', `http://127.0.0.1:5500/components/poke-details/?name=${pokemon.name}`);
    });
  });
}

function prevPokemons(ulListPokemons) {
  init -= 10;
  ulListPokemons.innerText = '';
  getPokeData(init, 10).then((list) => {
    list.results.forEach((pokemon) => {
      const listImportantPokemons = createElements('li', ulListPokemons, 'pokemons', null);
      const AnchorImportantPokemons = createElements('a', listImportantPokemons, null, `${pokemon.name}`);
      AnchorImportantPokemons.setAttribute('href', `http://127.0.0.1:5500/components/poke-details/?name=${pokemon.name}`);
    });
  });
}
