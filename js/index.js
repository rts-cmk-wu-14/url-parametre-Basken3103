const MainWrapper = document.querySelector("#main-wrapper")
fetch("../data/destinations.json").then((respons) => respons.json()).then((data) => {

    content(data.destinations)
}
);

function content(destinations) {

    const destinationDom = destinations.map((destination) => {

        return  /*html*/ `
   <figure> 
      <img src="../img/${destination.image}">
      <figcaption>
        <h2></h2>
        <a href="detaljer.html?id=${destination.id}">SE MERE</a>
      </figcaption>
   </figure>

`
    }).join("")
    console.log(destinationDom)
    MainWrapper.insertAdjacentHTML("beforeend", destinationDom)

}
console.log(MainWrapper);

// Nået til 26:55 i Steens URL 1 video.