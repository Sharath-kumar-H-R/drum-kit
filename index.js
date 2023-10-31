const elements = document.querySelectorAll("button");

// Function to play sound based on key or button click
function playSound(sound) {
    var audio;
    switch (sound) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            return; // Exit the function if the key doesn't match
    }

    audio.play();
}

// Event listener for keyboard events
document.addEventListener("keydown", event => {
    const key = event.key;
    playSound(key);
});

// Event listeners for button clicks
elements.forEach(element => {
    element.addEventListener("click", () => {
        const buttonKey = element.innerHTML;
        playSound(buttonKey);
    });
});
