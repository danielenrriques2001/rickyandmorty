export function createCharacterCard(datatvshow) {
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.innerHTML = `
  <div class="card__image-container">
    <img
      class="card__image"
      src= ${datatvshow.image}
      alt="Rick Sanchez"
    />
    <div class="card__image-gradient"></div>
  </div>
  <div class="card__content">
    <h2 class="card__title">${datatvshow.name}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${datatvshow.status}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${datatvshow.type}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${datatvshow.episode.length}</dd>
    </dl>
  </div>`;

  return newCard;
}
