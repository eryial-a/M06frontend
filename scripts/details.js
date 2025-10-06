addEventListener("DOMContentLoaded", async function () {
    document.querySelector("#deleteBtn").addEventListener("click", deleteSong)
    //grab search params from url following question mark
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get('id')
    console.log(songID)

    const response = await fetch("https://m06backend.onrender.com/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += `${song.title}`
    this.document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
        <h3>Artist - ${song.artist} </h3>
        <p>Popularity - ${song.popularity} <p>
        <p>Release Date - ${song.releaseDate.substring(0, 10)} <p>
    `

    document.querySelector("div").innerHTML = html
})

async function deleteSong() {
    //currently crashes database after since it sends headers again but dont know how to fix
    try {
        const urlparam = new URLSearchParams(window.location.search)
        const songID = urlparam.get('id')
        document.location.href = "/";
        const response = await fetch("https://m06backend.onrender.com/api/songs/" + songID, {
            method: "DELETE"
        })
    } catch (err) {

    }
}