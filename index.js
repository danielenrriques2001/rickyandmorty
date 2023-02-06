import { createCharacterCard } from "./components/card/card";

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
const searchQuery = "";
const url = 'https://rickandmortyapi.com/api/character/?page=1';

async function fetchDataAndRender(url) {
  
  try {
    const response = await fetch(url);
    const data = await response.json();

    const simplified_Data = data.results;
    simplified_Data.forEach(character => {
    
    });
   
  } catch (error) {
    console.log('Something unexpected just happened!', error)
  }

}

fetchDataAndRender(url);