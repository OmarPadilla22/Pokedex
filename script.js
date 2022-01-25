//Elemento 1
var intro = alert("Welcome to the Pokedex, here you can find de data to your favorite pokemon!!")
var poke1 = prompt("Give me your favorite pokemon number");
fetch('https://pokeapi.co/api/v2/pokemon/'+poke1+"/")
.then(respuesta => respuesta.json())
.then(pokemon1 => {
  let element1 = document.getElementById('elemento1')
  element1.innerHTML = `<p>${pokemon1.name}<p>
  <img src='${pokemon1.sprites.front_default}'><p>Height: ${pokemon1.height}<p><p>Weight: ${pokemon1.weight}<p><p>Type: ${pokemon1.types[0].type.name}<p>`;
  console.log(pokemon1)
})
.catch(err=>console.log(err))