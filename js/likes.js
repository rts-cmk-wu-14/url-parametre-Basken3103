//LOCAL STORAGE
function createLocalStorage(hearts, localStorageName, isFrontpage) {
    const localStorage = getLocalItem(localStorageName)
    if (localStorage.length === 0) {// If no localStorage is present, then create it
        const heartList = createHeartList(hearts)
        console.log(heartList);
        setLocalItem(localStorageName, heartList) //Insert local storage
    }
    // User has been on destination page first and on the frontpage
    else if (localStorage.length === 1 && isFrontpage) {

        const heartList = createHeartList(hearts)
        heartList.forEach((heart) => {
            if (heart.id == localStorage[0].id) {
                heart.active = localStorage[0].active
            }
        })
        setLocalItem(localStorageName, heartList) // Insert local storage
    }
}
function createHeartList(hearts) {
    const heartList = []
    hearts.forEach((heart) => {
        const heartId = Number(heart.dataset.id); // Get the id from heart DOM objects
        const heartObj = { id: heartId, active: false } //Creating object
        heartList.push(heartObj) // add the object to the list
    })


    return heartList
}
// ADDING CLICK ACTION TO HEARTS
function handleHeart(hearts) {
    hearts.forEach((heart) => {
        // heart.addEventListener("click", (event) => handleHeartClick(hearts, event))
        heart.addEventListener("click", handleHeartClick)
    })
}
// CLICK ON HEART
function handleHeartClick(event) {

    const key = "heartList"
    const target = event.currentTarget // clicked element
    // 1. target.attributes["data-id"].value
    // 2. target.getAttribute("data-id")
    // 3. target.dataset.id
    const id = parseInt(target.dataset.id); // clicked element id

    const heartList = getLocalItem(key) // get current localStorage list
    heartList[id - 1].active ? heartList[id - 1].active = false : heartList[id - 1].active = true // update the list
    setLocalItem(key, heartList) // updated list in localStorage
    updateHeartsDom(key)
}
// UPDATING HEART DOM
function updateHeartsDom(key) {
    const heartLocalStorage = getLocalItem(key)

    heartLocalStorage.forEach((elm) => {

        const heartDom = document.querySelector(`[data-id="${elm.id}"]`);
        if (!heartDom) {
            //console.warn("Intet DOM-element fundet til index");
            return;
        }

        elm.active ? heartDom.classList.add("active") : heartDom.classList.remove("active")
    })
}

// Er nået til 28:24 i Steens URL 3 - video.












