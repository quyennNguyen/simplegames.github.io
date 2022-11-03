const getHeroBtn = document.getElementById("get-hero-btn");
const clearBtn = document.getElementById("clear-btn");

const compCardSet = document.getElementById("comp-hero-set");
const yourCardSet = document.getElementById("your-hero-set");

const ACCESS_TOKEN = 2387982781353807;
const BASE_URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}`;

const numOfCards = 3;

getHeroBtn.onclick = () => {
  getHeroSet(numOfCards, compCardSet);
  getHeroSet(numOfCards, yourCardSet);
};

clearBtn.onclick = () => {
  compCardSet.innerHTML = "";
  yourCardSet.innerHTML = "";
};

const getHeroSet = (len, whose) => {
  if (whose.innerHTML.trim().length == 0) {
    for (let i = 0; i < len; i++) {
      let num = Math.floor(Math.random() * 731) + 1;
      getHero(num, whose);
    }
  }
};

const getHero = (id, whose) => {
  fetch(`${BASE_URL}/${id}`)
    .then((result) => result.json())
    .then((json) => {
      whose.innerHTML += `<div style="border: solid #f4f1de; padding: 5px; display: flex; flex-flow: column; background: #f2cc8f;">
      <img src="${json.image.url}" alt="superhero" width=300 height=400></img>
      <br>
      <p>Name: ${json.name.toUpperCase()}</p>
      <br>
      <p>Intelligence: ${json.powerstats.intelligence}</p>
      <p>Strength: ${json.powerstats.strength}</p>
      <p>Speed: ${json.powerstats.speed}</p>
      <p>Durability: ${json.powerstats.durability}</p>
      <p>Power: ${json.powerstats.power}</p>
      <p>Combat: ${json.powerstats.combat}</p>
      </div>`;
    });
};
