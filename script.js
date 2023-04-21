const searchBox = document.getElementById(".search-box");
searchBox.addEventListener('click', () => {
    fetch();
    cardChange();
})
searchBox.value = "foodtype";

fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch')
.then((result) => {
    result.json();
})
then((data) => {
    console.log(data);
})
.catch((err) => {
    alert(err);
});


const [...cardSection] = document.querySelectorAll(".cards");
const [...imgsection] = document.querySelectorAll(".src-change")
function cardChange(foodtype){
    cardSection.map(card => {
      return imgsection.setAttribute("src", "$`{foodtype}`$");
    } )
};
cardChange("foodtype");