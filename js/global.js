
// key: navnet på nøglen, value: et array eller et objekt med værdier
function setLocalItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getLocalItem(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function removeLocalItem(key) {
    localStorage.removeItem(key)
}

// Nået til 11:33 i Steens video - URL 3
