// Typing Animation

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


// Active Navbar Links

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){

            navLinks.forEach(link => {

                link.classList.remove("active");

                document
                    .querySelector(".nav-links a[href*=" + id + "]")
                    .classList.add("active");

            });

        }

    });

};