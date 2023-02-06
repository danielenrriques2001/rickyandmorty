import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
let searchQuery = "";
let url = "https://rickandmortyapi.com/api/character/?page=1";

async function fetchDataAndRender(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const simplified_Data = data.results;

    const characterInfo = simplified_Data
      .map((character) => {
        const info = {
          name: character.name,
          image: character.image,
          type: character.type,
          status: character.status,
          episodes: character.episode.length,
        };

        return info;
      })
      .forEach((character) => {
        const card = createCharacterCard(character);
        cardContainer.append(card);
      });
  } catch (error) {
    console.log("Something unexpected just happened!", error);
  }
}

fetchDataAndRender(url);

//search
searchBar.addEventListener("submit", (letersdata) => {
  letersdata.preventDefault();

  const data = new FormData(letersdata.target);
  const submitdata = Object.fromEntries(data);

  console.log(submitdata);
  searchQuery = submitdata;
  console.log(searchQuery);
});
