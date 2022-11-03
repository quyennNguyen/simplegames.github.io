const getCardBtn = document.getElementById("get-card-btn");
const playBtn = document.getElementById("play-btn");
const clearBtn = document.getElementById("clear-btn");

const compHeroSet = document.getElementById("comp-hero-set");
const yourHeroSet = document.getElementById("your-hero-set");

const compSet = [];
const yourSet = [];

const numOfCards = 3;

const ACCESS_TOKEN = 2387982781353807;
const BASE_URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}`;

getCardBtn.onclick = () => {
  getHeroSet(numOfCards, compHeroSet);
  getHeroSet(numOfCards, yourHeroSet);
};

// playBtn.onclick = () => {
  
// };

clearBtn.onclick = () => {
  compHeroSet.innerHTML = "";
  yourHeroSet.innerHTML = "";
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
      whose.innerHTML += getHeroInfoStr(json);
    });
};

const getHeroInfoStr = (character) => {
  let name = `<h3>${character.name.toUpperCase()}</h3>`;
  let image = `<img src="${character.image.url}" alt="superhero" width=225 height=300></img>`;
  let stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${stat}: ${character.powerstats[stat]}</p>`;
    })
    .join("");
  let infoStr = `<div class="hero-card" style="border: solid #f4f1de; padding: 5px; width:225px display: flex; flex-flow: column; background: #f2cc8f; cursor: pointer;"> ${name}${image}${stats} </div>`;
  return infoStr;
};

// const getHeroStat = (character) => {
//   const stats = {};
//   // Object.assign(stats, character.powerstats);
//   Object.keys(character.powerstats).forEach(stat => stats[stat] = Number(character.powerstats[stat]));
//   return stats;
// };