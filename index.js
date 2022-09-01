// 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

let myURLs = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

const urlFromLocalStorage = JSON.parse(localStorage.getItem("myURLs"));
console.log(urlFromLocalStorage);

if (urlFromLocalStorage) {
  myURLs = urlFromLocalStorage;
  render(myURLs);
}

tabBtn.addEventListener("click", function() {  
  // get url of current tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myURLs.push(tabs[0].url);

    // save to local storage
    localStorage.setItem("myURLs", JSON.stringify(myURLs));
    render(myURLs);
    
  })  
})

function render(urls) {
  let listItems = "";
  for (let i = 0; i < urls.length; i++) {
    // listItems += "<li> <a target='_blank' href=" + "https://" + myURLs[i] + ">" + myURLs[i] + "</a></li>";
    // the below is cleaner:
    listItems += `
      <li> 
        <a target='_blank' href='${urls[i]}'>  
          ${urls[i]}
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

inputBtn.addEventListener("click", function() {
  myURLs.push(inputEl.value);
  console.log(myURLs)
  inputEl.value = "";

  localStorage.setItem("myURLs", JSON.stringify(myURLs));

  render(myURLs);
  console.log(localStorage.getItem("myURLs"))
})

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear();
  myURLs = [];
  render(myURLs);
})