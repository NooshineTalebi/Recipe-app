const searchBox = document.querySelector(".search-box");
searchBox.addEventListener('change', () => {
    fetchApI();
    cardChange();
})

const foodtype = searchBox.value;

function fetchApI() {
    fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch')
    .then((result) => {
    return result.json();
})
    .catch((err) => {
    alert(err);
});
}

const [...imgsection] = document.querySelectorAll(".src-change")
function cardChange(){
    imgsection.map((imgchange) => {
      return imgchange.setAttribute("src", "`${foodtype}`");
    } )

};
cardChange(foodtype);
