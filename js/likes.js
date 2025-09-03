//LOCAL STORAGE
function createLocalStorage(hearts, localStorageName, isFrontpage) {
    const localStorage = getLocalItem(localStorageName)
    if (localStorage.length === 0) {// If no localStorage is present, then create it
        const heartList = createHeartList(hearts)
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