getJoke()

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

function copyJoke() {
    const textToCopy = document.getElementById("jokes");
    const copyBtn = document.getElementById("copy");

    const additionalText = "More Jokes at https://abdulxyz.github.io/random-jokes/";

    copyBtn.addEventListener("click", () => {

        const originalText = textToCopy.textContent;


        const textarea = document.createElement("textarea");
        textarea.value = originalText + "   " + additionalText;



        document.body.appendChild(textarea);

        // Select the text in the textarea
        textarea.select();

        // Execute the copy command to copy the selected text to the clipboard
        document.execCommand("copy");

        // Remove the temporary textarea element
        document.body.removeChild(textarea);

        // Optionally, provide user feedback
        copyBtn.textContent = "Copied!";
        setTimeout(function () {
            copyBtn.textContent = "Copy";
        }, 2000);

    })

}