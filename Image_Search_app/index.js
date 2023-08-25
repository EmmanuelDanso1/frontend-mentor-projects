const unsplashApiKey = "70jKOu90rs2oYiWhNeDbLN1ovFGCSXEp63-M2VQflKk";

const formElement = document.querySelector("form");

const searchInput = document.getElementById("search-input");

const searchButton = document.getElementById("search-button");

const searchResultsElement = document.querySelector(".search-results");

const showButton = document.getElementById("show-more-button-images");

//input function to get the search
let inputData = "";
//showing the number of pages
let page = 1;

async function moreImages(){
inputData = searchInput.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${unsplashApiKey}`;
console.log(url);
const response = await fetch(url);
const data = await response.json();
// console.log(data);
if(page === 1){
    searchResultsElement.innerHTML = "";
}
const results = data.results;

results.map((result)=>{
const imageWrapper = document.createElement("div");
//adding the div using js
imageWrapper.classList.add("search-result");
const image = document.createElement("img");
//urls from the results
image.src = result.urls.small;
image.alt = result.alt_description;
const imageLink = document.createElement("a");
imageLink.href = result.links.html;
imageLink.target = "_blank";
imageLink.textContent = result.alt_description;
// console.log(result)
imageWrapper.appendChild(image);
imageWrapper.appendChild(imageLink);
//appending it to the div
searchResultsElement.appendChild(imageWrapper);
});
//page increment
page++;

if(page > 1){
    showButton.style.display = "block";
}

}
formElement.addEventListener("submit",(event)=>{
    event.preventDefault();
    //FOR THE FIRST PAGE
    page = 1;
    moreImages();
})
//making the show more button responsive
showButton.addEventListener("click",()=>{
    moreImages();
});