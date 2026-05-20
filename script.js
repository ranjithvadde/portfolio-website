const typingText = document.querySelector(".typing-text");

const words = [
    "Frontend Developer",
    "UI Designer",
    "Freelancer",
    "AI Enthusiast"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let currentLetters = "";

function type(){

    if(wordIndex === words.length){
        wordIndex = 0;
    }

    currentWord = words[wordIndex];

    currentLetters = currentWord.slice(0, ++letterIndex);

    typingText.textContent = currentLetters;

    if(currentLetters.length === currentWord.length){

        wordIndex++;
        letterIndex = 0;

    }

    setTimeout(type, 150);

}

type();
