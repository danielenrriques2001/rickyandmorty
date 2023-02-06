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

document.addEventListener('DOMContentLoaded', () => {
  fetchDataAndRender()

})
// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

async function fetchDataAndRender() {

  try {
 
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`);
    const data = await response.json();
    
    let pages = data.info.pages;
    maxPage = pages;
    
   displayPagination(page, maxPage)
    
    

    const simplified_Data = data.results;
    

    const characterInfo = simplified_Data.map((character) => {
      
      const info = {
        name: character.name,
        image: character.image,
        type: character.type,
        status: character.status,
        episodes: character.episode.length
      }

      return info;
        
    }).forEach(character => {
      const card = createCharacterCard(character);
      cardContainer.append(card)
    });



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


//search
searchBar.addEventListener("submit", (letersdata) => {
  letersdata.preventDefault();

  const data = new FormData(letersdata.target);
  const submitdata = Object.fromEntries(data);

  console.log(submitdata);
  searchQuery = submitdata;
  console.log(searchQuery);
});

nextButton.addEventListener('click', () => {
    

    if(page >= 42) {
      page = 42; 
      displayPagination(page, maxPage)
      }

    if(page < 42) {
      page++;
      cleanHtml();

      fetchDataAndRender();  
    }
})

prevButton.addEventListener('click', () => {
  
 
  if(page <= 1) {
    page = 1; 
    displayPagination(page, maxPage)
  } 

  if(page > 1) {
    page--;
    cleanHtml(); 
    fetchDataAndRender();
  }
  

})

function cleanHtml() {
  while(cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild)
  }
}

function displayPagination(page, maxPage) {
  pagination.innerHTML = `${page}/${maxPage}`;
}
