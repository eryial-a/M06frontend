addEventListener("DOMContentLoaded", function () {
    document.querySelector("#addBtn").addEventListener("click", addSong)
})

//add song to database - has to be async since calling data from outside server

async function addSong() {
    //create a song object based on form from user - makes it easy to send data to database
    const song = {
        title: document.querySelector('#title').value,
        artist: document.querySelector('#artist').value,
        popularity: document.querySelector('#popularity').value,
        releaseDate: document.querySelector('#released').value,
        genre: document.querySelector('#genre').value ? document.querySelector("#genre").value.split(",") : []
    }

    const response = await fetch("http://localhost:3000/api/songs",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(song)
    })

    if (response.ok) {
        const results = await response.json()
        alert("Added song with ID of " + results._id)

        //reset form after song is added
        document.querySelector("form").reset()
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot add song"
    }
}