// We will call pokemon API.
console.log("I am calling pokemon API.")

let pokemon = null;

const pokemonName = document.getElementById("pokemon-name")
const pokemonImage = document.getElementById("pokemon-image")
const pokemonInfo = document.getElementById("pokemon-info")
let id = null
const searchBox = document.getElementById("searchBox")
const button = document.getElementById("submit")

button.addEventListener("click", (e)=>{
    id=searchBox.value

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`,{
        method: "GET"
    }).then(res=>res.json().then(data => {
        pokemon = data
        pokemonImage.setAttribute("src", pokemon.sprites.front_default)
        pokemonName.innerText = pokemon.name
        pokemonInfo.innerHTML = `<span id="height"> Height: ${pokemon.height} </span> <span id="weight"> Weight: ${pokemon.weight} </span>`
    }))
})
