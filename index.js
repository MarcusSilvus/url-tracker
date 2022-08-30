// 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

let myURLs = [];

let savedURLsEl = document.getElementById("savedURLs-el")
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function() {
  myURLs.push(inputEl.value);
  console.log(myURLs)

  for (let i = 0; i < myURLs.length; i++) {
    savedURLsEl.textContent = myURLs;
  }
})




 