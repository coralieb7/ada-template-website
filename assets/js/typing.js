const texts = [
    'Do you love movies?',
    'What proportion of female characters is portrayed as smart in movies?',
    'What is the impact of the #MeToo movement on the film industry?',
    'How do you think the film industry can be more inclusive?',
    'In your opinion, how are women portrayed in movies?',
    'What are the prime years for an actress?',
    'How many female directors do you know?',
    'Don\'t know half of the answers? You are in the right place.'
];

let currentTextIndex = 0;
let animationFrameRequest;

function typeWriter(text, elementId, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.textContent = '';

    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            animationFrameRequest = setTimeout(typing, 100); // Speed of typing
        } else if (callback) {
            animationFrameRequest = setTimeout(callback, 1000); // Delay before the next text
        }
    }

    typing();
}

function showTextsLoop() {
    typeWriter(texts[currentTextIndex], 'anim', () => {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        showTextsLoop(); // Call the function again for the next text
    });
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Start the typewriter loop
showTextsLoop();
