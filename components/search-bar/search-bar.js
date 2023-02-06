searchBar.addEventListener("input", (letersdata) => {
  letersdata.preventDefault();

  const submitdata = new FormData(letersdata.target);
  const data = Object.fromEntries(submitdata);

  console.log(submitdata);
});
