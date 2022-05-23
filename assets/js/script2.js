const pokeAPIURL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
//Nos traemos los datos de los bichos

const myPokemonData$$ = document.querySelector('.pokemon');
const miInput$$ = document.querySelector('.miInput');

const getPokemonList = async (pokeLookingFor) => {
  let bichoData = await fetch(pokeAPIURL);
  let bichoDataJSON = await bichoData.json();
  let characters = bichoDataJSON.results;
  //comprobamos si el input tiene valor introducido por el user

  const layoutBuild = async (param) => {
    //Construimos el Layout
    const cardDiv$$ = document.createElement('div');
    cardDiv$$.classList.add(['pokemonData']);
    const pokemonContainerDiv$$ = document.createElement('div');
    pokemonContainerDiv$$.classList.add(['pokemonContainer']);
    const pokemonDataBar$$ = document.createElement('div');
    pokemonDataBar$$.classList.add('pokemonDataBar');
    myPokemonData$$.appendChild(cardDiv$$);
    cardDiv$$.appendChild(pokemonContainerDiv$$);
    //Creamos e insertamos el Nombre del pokemon
    const pokeName$$ = document.createElement('h2');
    pokeName$$.innerText = param.name;
    pokemonContainerDiv$$.appendChild(pokeName$$);

    //Creamos e insertamos la Imagen
    const imgDiv$$ = document.createElement('div');
    imgDiv$$.classList.add(['pokemonImage']);
    const pokeImage$$ = document.createElement('img');
    pokeImage$$.setAttribute('src', param.sprites.other.home.front_default);
    imgDiv$$.appendChild(pokeImage$$);
    //DataBar
    const pokemonId$$ = document.createElement('span');
    pokemonId$$.classList.add(['pokemonId']);
    const pokemonWeight$$ = document.createElement('span');
    const pokemonHeight$$ = document.createElement('span');
    pokemonId$$.innerText = 'Nº ' + param.id;
    pokemonHeight$$.innerText = 'Altura ' + param.height / 10 + ' m';
    pokemonWeight$$.innerText = 'Peso ' + param.weight / 10 + ' kg';

    //Insertamos el codigo html
    pokemonContainerDiv$$.appendChild(imgDiv$$);
    pokemonContainerDiv$$.appendChild(pokemonDataBar$$);
    pokemonDataBar$$.appendChild(pokemonId$$);
    pokemonDataBar$$.appendChild(pokemonHeight$$);
    pokemonDataBar$$.appendChild(pokemonWeight$$);
  };

  if (!miInput$$.value) {
    //recorremos los bichos para traernos sus features
    for (let i = 0; i < pokeAPIURL.length; i++) {
      let pokeCurrentData = characters[i].url;
      let bichoFeatures = await fetch(pokeCurrentData);
      let bichoFeaturesJSON = await bichoFeatures.json();
      const charactersFeatures = bichoFeaturesJSON;

      layoutBuild(charactersFeatures);
    }
  } else {
    myPokemonData$$.innerHTML = ``;
    for (const poke of characters) {
      if (
        poke.name
          .toLowerCase()
          .trim()
          .includes(miInput$$.value.toLowerCase().trim())
      ) {
        let pokeCurrentData = poke.url;
        let bichoFeatures = await fetch(pokeCurrentData);
        let bichoFeaturesJSON = await bichoFeatures.json();
        const charactersFeatures = bichoFeaturesJSON;
        layoutBuild(charactersFeatures);
      }
    }
  }
};
getPokemonList();

const tutoFeature = () => {
  const backTuto$$ = document.createElement('div');
  backTuto$$.classList.add(['backTuto']);
  const messageTuto$$ = document.createElement('div');
  messageTuto$$.classList.add(['messagetutoclass']);

  //messageTuto$$.classList.add(['messageTuto']);
  messageTuto$$.innerHTML = `<h2>Mensaje de ayuda</h2><p>Este es el contenido del mensaje de ayuda</p><a class="closeButton">Cerrar mensaje</a>`
  document.body.appendChild(backTuto$$);
  document.body.appendChild(messageTuto$$);
}

//tutoFeature();

miInput$$.addEventListener('input', getPokemonList);