
const searchBox = document.querySelector(".search-box");

async function fetchAPI(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function cardChange() {
    const foodtype = searchBox.value;
    const imgsection = document.querySelectorAll(".src-change");
    [...imgsection].map((imgchange) => {
      return imgchange.setAttribute("src", `${foodtype}`);
    })
};

searchBox.addEventListener('click', () => {
    fetchAPI();
    cardChange();
});

