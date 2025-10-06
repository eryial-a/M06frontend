//DOM loaded event listener
addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("https://backend-255-fa25-wu8w.onrender.com/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
        html += `<li>${song.title} - ${song.artist}</li>`
    }

    document.querySelector("#addedsong").innerHTML = html
})