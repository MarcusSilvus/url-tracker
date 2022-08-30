// 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

let myURLs = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
  myURLs.push(inputEl.value);
  console.log(myURLs)
  inputEl.value = "";
  renderURLs();
})

function renderURLs() {
  let listItems = "";
  for (let i = 0; i < myURLs.length; i++) {
    // listItems += "<li> <a target='_blank' href=" + "https://" + myURLs[i] + ">" + myURLs[i] + "</a></li>";
    listItems += `
      <li> 
        <a target='_blank' href='https://${myURLs[i]}'>  
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