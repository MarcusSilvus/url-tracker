// 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

let myURLs = [1, 2, 3, 4];
let listItems = "";

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
  myURLs.push(inputEl.value);
  console.log(myURLs)

})

for (let i = 0; i < myURLs.length; i++) {
  listItems += "<li> " + myURLs[i] + "</li>";
}

ulEl.innerHTML = listItems;

/* another way to do:
  ulEl.innerHTML += "<li> " + myURLs[i] + "</li>";
is:
  const li = document.createElement("li");
  li.textContent = myURLs[i];
  ulEl.append(li);  
  */