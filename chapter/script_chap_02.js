window.addEventListener("scroll", function() {
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 0);
})

let button = document.getElementById("button");
let image = document.getElementById("image");
let number = document.getElementById("number");
let name = document.getElementById("name");

const changePokemon = async () => {
  let randomNumber = Math.ceil(Math.random() * 150) + 1;
  let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
  let data = await fetch(requestString);
  let response = await data.json();
  
  image.src = response.sprites.front_default;
  number.textContent = `#${response.id}`;
  name.textContent = response.name;
}

changePokemon();
button.addEventListener("click", changePokemon);