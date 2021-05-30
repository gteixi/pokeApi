function getPokeData(init, max) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${init}&limit=${max}`)
    .then((pokemon) => pokemon.json())
    .catch((e) => { console.error('-> ERROR!', e); });
}

function createElements(tag, parent, className, text) {
  const creationTag = document.createElement(tag);
  parent.appendChild(creationTag);
  creationTag.className = className;
  creationTag.innerText = text;
  return creationTag;
}
