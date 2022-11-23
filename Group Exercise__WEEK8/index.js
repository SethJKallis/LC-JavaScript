let sentenceInput = document.querySelector(`#sentence-el`);
let wordInput = document.querySelector(`#word-el`);
let noOfCharacters = document.querySelector(`#no-chars`);
let charPosition = document.querySelector(`#position-el`);
let charsBtn = document.querySelector(`#chars-btn`);
let searchBtn = document.querySelector(`#search-btn`);

function displayNoChars(){
    if(sentenceInput.value === ""){
        noOfCharacters.textContent = `Number of Characters: `
        alert(`Please enter a sentence and try again!`)
    } else{
        noOfCharacters.textContent = `Number of Characters: ` + sentenceInput.value.length
    }
}

function positionOfChar(){
    if(wordInput.value === ""){
        charPosition.textContent = charPosition.textContent
        alert(`Please enter a word and try again!`)
    } else if(sentenceInput.value.search(wordInput.value) === -1){
        charPosition.textContent = `Value was found at position: No matches found!`
    }  else{
        charPosition.textContent = `Value was found at position: ` + sentenceInput.value.search(wordInput.value)
    }
}
