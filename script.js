
let button = document.getElementById("find");
button.addEventListener("click",search)

async function search()
{
    let word = document.getElementById("enteredData").value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let response = await fetch(url);
    let data = await response.json();
    const definition = data[0].meanings[0].definitions[0].definition;
    document.getElementById("databox").innerHTML = definition;

}