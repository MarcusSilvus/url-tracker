// 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

let myURLs = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

const urlFromLocalStorage = JSON.parse(localStorage.getItem("myURLs"));
console.log(urlFromLocalStorage)

if (urlFromLocalStorage) {
  myURLs = urlFromLocalStorage;
  renderURLs();
}

inputBtn.addEventListener("click", function() {
  myURLs.push(inputEl.value);
  console.log(myURLs)
  inputEl.value = "";

  localStorage.setItem("myURLs", JSON.stringify(myURLs));

  renderURLs();
  console.log(localStorage.getItem("myURLs"))
})

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear();
  myURLs = [];
  renderURLs();
})

function renderURLs() {
  let listItems = "";
  for (let i = 0; i < myURLs.length; i++) {
    // listItems += "<li> <a target='_blank' href=" + "https://" + myURLs[i] + ">" + myURLs[i] + "</a></li>";
    // the below is cleaner:
    listItems += `
      <li> 
        <a target='_blank' href='${myURLs[i]}'>  
          ${myURLs[i]}
        </a>
      </li>
      `
  }
  ulEl.innerHTML = listItems;
}

/* another way to do:
  ulEl.innerHTML += "<li> " + myURLs[i] + "</li>";
is:
  const li = document.createElement("li");
  li.textContent = myURLs[i];
  ulEl.append(li);  
  */