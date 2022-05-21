// Almaceno en variable la url del API
const pokeAPIURL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
//const pokeAPIFake = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemonsBuena = async () => {
  const cardGallery$$ = document.querySelector('.pokemon');
  //Nos traemos los datos
  let bichoData = await fetch(pokeAPIURL);
  let bichoDataJSON = await bichoData.json();
  const characters = bichoDataJSON.results;

  // Recorremos los pokemon
  for (let i = 0; i < pokeAPIURL.length; i++) {
    let pokeCurrentData = characters[i].url;
    let bichoFeatures = await fetch(pokeCurrentData);
    let bichoFeaturesJSON = await bichoFeatures.json();
    const charactersFeatures = bichoFeaturesJSON;

    //Layout
    const cardDiv$$ = document.createElement('div');
    cardDiv$$.classList.add(['pokemonData']);
    const pokemonContainerDiv$$ = document.createElement('div');
    pokemonContainerDiv$$.classList.add(['pokemonContainer']);
    const pokemonDataBar$$ = document.createElement('div');
    pokemonDataBar$$.classList.add('pokemonDataBar')
    cardGallery$$.appendChild(cardDiv$$);

    cardDiv$$.appendChild(pokemonContainerDiv$$);

    //Nombre
    const pokeName$$ = document.createElement('h2');
    pokeName$$.innerText = charactersFeatures.name;
    pokemonContainerDiv$$.appendChild(pokeName$$);

    //Imagen
    const imgDiv$$ = document.createElement('div');
    imgDiv$$.classList.add(['pokemonImage']);
    const pokeImage$$ = document.createElement('img');
    pokeImage$$.setAttribute(
      'src',
      charactersFeatures.sprites.other.home.front_default
    );
    imgDiv$$.appendChild(pokeImage$$);

    //DataBar
    const pokemonId$$ = document.createElement('span');
    pokemonId$$.classList.add(['pokemonId']);
    const pokemonWeight$$ = document.createElement('span');
    const pokemonHeight$$ = document.createElement('span');
    pokemonId$$.innerText = "Nº " + charactersFeatures.id;
    pokemonHeight$$.innerText = "Altura " + (charactersFeatures.height / 10) + " m";
    pokemonWeight$$.innerText = "Peso" + charactersFeatures.weight/10 + " kg";

    //URL
    const pokeURL$$ = document.createElement('p');
    pokeURL$$.innerText = characters[i].url;

    //Insertamos el codigo html
    pokemonContainerDiv$$.appendChild(imgDiv$$);
    pokemonContainerDiv$$.appendChild(pokemonDataBar$$)
    pokemonDataBar$$.appendChild(pokemonId$$);
    pokemonDataBar$$.appendChild(pokemonHeight$$);
    pokemonDataBar$$.appendChild(pokemonWeight$$);
    //pokemonContainerDiv$$.appendChild(pokeURL$$);
  }
};
getPokemonsBuena();

const buscarPokemon = async () => {

}