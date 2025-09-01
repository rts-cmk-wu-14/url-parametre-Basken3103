let params = new URLSearchParams(window.location.search)
const id = params.get("id")
const MainWrapper = document.querySelector("#main-wrapper")

console.log(id);

fetch(`../data/${id}.json`).then((respons) => respons.json()).then((data) => {
    console.log(data);
    showData(data)

})

function showData(data) {

    const content = `<h2>${data.title}</h2>`

    MainWrapper.insertAdjacentHTML("beforeend", content)
}
