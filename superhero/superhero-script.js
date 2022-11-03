const getHeroBtn = document.getElementById("get-hero-btn");
const clearBtn = document.getElementById("clear-btn");

const compHeroSet = document.getElementById("comp-hero-set");
const yourHeroSet = document.getElementById("your-hero-set");

const numOfCards = 3;

const compSet = [];
const yourSet = [];

const ACCESS_TOKEN = 2387982781353807;
const BASE_URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}`;

getHeroBtn.onclick = () => {
  getCompHeroSet(numOfCards);
  getYourHeroSet(numOfCards);
};

clearBtn.onclick = () => {
  compHeroSet.innerHTML = "";
  yourHeroSet.innerHTML = "";
};

const getCompHeroSet = (len) => {
  if (compHeroSet.innerHTML.trim().length == 0) {
    for (let i = 0; i < len; i++) {
      let num = Math.floor(Math.random() * 731) + 1;
      compSet.push(getHero(num, compHeroSet));
    }
  }
};

const getYourHeroSet = (len) => {
  if (yourHeroSet.innerHTML.trim().length == 0) {
    for (let i = 0; i < len; i++) {
      let num = Math.floor(Math.random() * 731) + 1;
      yourSet.push(getHero(num, yourHeroSet));
    }
  }
};

const getHero = (id, whose) => {
  const hero = {};
  fetch(`${BASE_URL}/${id}`)
    .then((result) => result.json())
    .then((json) => {
      whose.innerHTML += getHeroInfoStr(json);
      hero = getHeroStat(json);
    });
  return hero;
};

const getHeroInfoStr = (character) => {
  let name = `<h3>${character.name.toUpperCase()}</h3>`;
  let image = `<img src="${character.image.url}" alt="superhero" width=225 height=300></img>`;
  let stats = Object.keys(character.powerstats)
    .map((stat) => {
      return `<p>${stat}: ${character.powerstats[stat]}</p>`;
    })
    .join("");
  let infoStr = `<div style="border: solid #f4f1de; padding: 5px; display: flex; flex-flow: column; background: #f2cc8f; cursor: pointer;"> ${name}${image}${stats} </div>`;
  return infoStr;
};

const getHeroStat = (character) => {
  const stats = {};
  stats.name = character.name;
  Object.assign(stats, character.powerstats);
  return stats;
};

const fight = () => {
  alert("Noice Hero!");
};
