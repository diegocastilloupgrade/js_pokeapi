const pokeAPIURL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
//Nos traemos los datos de los bichos

const myPokemonData$$ = document.querySelector('.pokemon');
const miInput$$ = document.querySelector('.miInput');

const getPokemonList = async (pokeLookingFor) => {
  let bichoData = await fetch(pokeAPIURL);
  let bichoDataJSON = await bichoData.json();
  let characters = bichoDataJSON.results;
  //comprobamos si el input tiene valor introducido por el user
  
  if (!miInput$$.value) {
    console.log('characters son ', characters);
    //recorremos los bichos para traernos sus features
    for (let i = 0; i < pokeAPIURL.length; i++) {
      let pokeCurrentData = characters[i].url;
      let bichoFeatures = await fetch(pokeCurrentData);
      let bichoFeaturesJSON = await bichoFeatures.json();
      const charactersFeatures = bichoFeaturesJSON;

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
      pokeName$$.innerText = charactersFeatures.name;
      pokemonContainerDiv$$.appendChild(pokeName$$);

      //Creamos e insertamos la Imagen
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
      pokemonId$$.innerText = 'Nº ' + charactersFeatures.id;
      pokemonHeight$$.innerText =
        'Altura ' + charactersFeatures.height / 10 + ' m';
      pokemonWeight$$.innerText =
        'Peso' + charactersFeatures.weight / 10 + ' kg';

      //URL
      const pokeURL$$ = document.createElement('p');
      pokeURL$$.innerText = characters[i].url;

      //Insertamos el codigo html
      pokemonContainerDiv$$.appendChild(imgDiv$$);
      pokemonContainerDiv$$.appendChild(pokemonDataBar$$);
      pokemonDataBar$$.appendChild(pokemonId$$);
      pokemonDataBar$$.appendChild(pokemonHeight$$);
      pokemonDataBar$$.appendChild(pokemonWeight$$);
      //pokemonContainerDiv$$.appendChild(pokeURL$$);
    }
  } else {
    myPokemonData$$.innerText = ``;

    for (const poke of characters) {
      if (
        poke.name
          .toLowerCase()
          .trim()
          .includes(miInput$$.value.toLowerCase().trim())
      ) {
        console.log('Encontrada coincidencia en ', poke);
        let pokeCurrentData = poke.url;
        let bichoFeatures = await fetch(pokeCurrentData);
        let bichoFeaturesJSON = await bichoFeatures.json();
        const charactersFeatures = bichoFeaturesJSON;
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
        pokeName$$.innerText = charactersFeatures.name;
        pokemonContainerDiv$$.appendChild(pokeName$$);

        //Creamos e insertamos la Imagen
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
        pokemonId$$.innerText = 'Nº ' + charactersFeatures.id;
        pokemonHeight$$.innerText =
          'Altura ' + charactersFeatures.height / 10 + ' m';
        pokemonWeight$$.innerText =
          'Peso' + charactersFeatures.weight / 10 + ' kg';

        //URL
        const pokeURL$$ = document.createElement('p');
        pokeURL$$.innerText = poke.url;

        //Insertamos el codigo html
        pokemonContainerDiv$$.appendChild(imgDiv$$);
        pokemonContainerDiv$$.appendChild(pokemonDataBar$$);
        pokemonDataBar$$.appendChild(pokemonId$$);
        pokemonDataBar$$.appendChild(pokemonHeight$$);
        pokemonDataBar$$.appendChild(pokemonWeight$$);
      }
    }
  }

  // for (let z = 0; z < characters.length; z++) {
  //   if (pokeLookingFor.includes(characters[z].results.name)) {
  //     console.log('el pokemon buscado es ' + pokeLookingFor);
  //   } else {
  //     break;
  //   }
  // }
  // Recorremos los pokemon
};
getPokemonList();

// const guardarBusqueda = async () => {
//   let queBusco = myInput$$.value;
//   console.log(queBusco);
// }

miInput$$.addEventListener('input', getPokemonList);
