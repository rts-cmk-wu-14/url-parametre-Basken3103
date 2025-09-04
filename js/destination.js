const wrapper = document.querySelector("#main-wrapper")

let params = new URLSearchParams(window.location.search)
let id = params.get("id")
let url = `data/${id}.json` // Json data file url

fetch(url).then(result => result.json()).then(data => handleData(data))

function handleData(data) {



}
