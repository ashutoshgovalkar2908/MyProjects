// function for outline on search baar and searchdropdown 

let searchIn = document.querySelector("#search-in");
let searchForm = document.querySelector(".search-form");
let searchDropdown = document.querySelector('.search-dropdown');

searchIn.addEventListener("focus", ()=>{
    searchForm.classList.add("search-form-outline");
    searchDropdown.classList.remove('search-form-outline');
});

searchIn.addEventListener('blur', ()=>{
    setTimeout(() => {
        searchForm.classList.remove("search-form-outline");
    }, 100);
});

searchDropdown.addEventListener('click',()=>{
    searchDropdown.classList.add('search-form-outline');
});

searchDropdown.addEventListener('blur', ()=>{
    setTimeout(() => {
        searchDropdown.classList.remove("search-form-outline");
    }, 100);
});

// Detect clicks outside the form to remove the outline
document.addEventListener('click', (event) => {
    if (!searchDropdown.contains(event.target)) {
        searchDropdown.classList.remove('search-form-outline');
    }
});

