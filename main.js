alert("Hello Madhav")

// The main JavaScript File
// Creating references for each element
var inputText = document.querySelector("#input");
var btn = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output");

//Essentials to Interact with the server
var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";

// Functions that run the program
function eventHandler(){
    // fetch(urlGenerator(inputText.value))
    // .then(response => response.json())
    // .then(json => console.log(json.contents.translated))
    // .catch(errorHandler)

    fetch(urlGenerator(inputText.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerHTML = translatedText;
    })
    .catch(errorHandler)
}

// Url Generator to generate the url
function urlGenerator(text){
    return serverUrl + "?" + "text=" + text
}

// Function that Displays an error, when the program catches an error
function errorHandler(error){
    console.log("Error Detected", error)
    alert("Something went wrong, please try after some time")
}

// 1. EventHandler --> the function that is triggered when someone clicks the button
btn.addEventListener("click", eventHandler)