let api =document.getElementById("conteiner")
const input =document.querySelector("Input");
const button =document.querySelector("button");
const pokemoncontainer =document.querySelector("pokemon-container");

button.addEventListener("click", (e) => {
e.preventDefault();
buscarPokemon(input.value);
})


/*fetch(‘https://hp-api.herokuapp.com/api/characters‘)
 .then(response => response.json())
 .then(json => console.log(json)) /*/
//fetch es una funcion que toma un URL y manda un pedido y ese URL nos manda una respuesta
//JSON es el formato en el que se pasan los datos atraves de la web


function buscarPokemon(pokemon) {
fetch("https://pokeapi.co/api/v2/pokemon/").then(res=>res.json())
.then((data)=>{
   console.log(data);
  });
 
}


   /*.then(json => console.log(json))*/

//https://es.quora.com/C%C3%B3mo-insertar-una-imagen-en-Javascript

function crearPokemon(data){


   
    const img = document.createElement("img")
   img.src = data.front_default;
    h3.textContent = pokemon.name;

    const div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(h3);
    
    pokemonContainer.appendChild(div);

    
    }

    buscarPokemon();

//`http://pokeapi.co/media/sprites/pokemon/${pokemonIndex}.png`;---