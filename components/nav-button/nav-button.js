export function CreateButtonPrevious() {
  const newButton = document.createElement("button");
  newButton.classList.add("button", "button--prev");
  newButton.textContent = "previous";
  console.log(newButton);

  newButton.addEventListener("click", () => {
    if (page <= 1) {
      page = 1;
      displayPagination(page, maxPage);
    }

    if (page > 1) {
      page--;
      cleanHtml();
      fetchDataAndRender();
    }
  });
  return newButton;
}

{
  /* <nav class="navigation" data-js="navigation">
  <button class="button button--prev" data-js="button-prev">
    previous
  </button>
  <span class="navigation__pagination" data-js="pagination">
    1 / 1
  </span>
  <button class="button button--next" data-js="button-next">
    next
  </button>
</nav>; */
}
