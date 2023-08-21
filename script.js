const titleText = "// baked beans";
const contentText = `Embrace bugs as stepping stones to code mastery; each fix propels you forward, unraveling new layers of expertise and transforming you into a debugging virtuoso.`;
const authorText = "~ ASMRcode";

const titleElement = document.querySelector('.title');
const contentTextElement = document.querySelector('.contentText');
const authorTextElement = document.querySelector('.authorText');

let titleIndex = 0;
let contentIndex = 0;
let authorIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        titleElement.innerHTML += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 100); // Adjust typing speed here
    }
}

function typeContent() {
    if (contentIndex < contentText.length) {
        contentTextElement.innerHTML += contentText.charAt(contentIndex);
        contentIndex++;
        setTimeout(typeContent, 20); // Adjust typing speed here
    }
}

function typeAuthor() {
    if (authorIndex < authorText.length) {
        authorTextElement.innerHTML += authorText.charAt(authorIndex);
        authorIndex++;
        setTimeout(typeAuthor, 50); // Adjust typing speed here
    }
}

window.addEventListener('load', () => {
    setTimeout(typeTitle, 5000);
    setTimeout(typeContent, 6000);
    setTimeout(typeAuthor, 8000); // Adjust delay before starting content typing
});
