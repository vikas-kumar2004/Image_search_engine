const searchReasult = document.getElementById("search-result");
const searchBox = document.getElementById("search-box");
const searchForm = document.getElementById("search-form");
const showMoreBtn = document.getElementById("show-more-btn");
const accessKey = "w41v3UZdw_f1Syo4fAXLJ64S9KuwT5J3YzbiGDFglzw";
let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    if(page == 1){
        searchReasult.innerHTML = "";
    }
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchReasult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
})
showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})

