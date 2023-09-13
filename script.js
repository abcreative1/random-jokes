function getJoke() {

    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious&type=single"

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const jokeElement = document.getElementById('jokes')
            const categoryElement = document.getElementById("category")

            jokeElement.innerText = data.joke
            categoryElement.innerText = "Category: " + data.category

        })
        .catch(error => {

            const jokeElement = document.getElementById('jokes')
            jokeElement.innerText = error
            console.log("Error: ", error);
        })
}