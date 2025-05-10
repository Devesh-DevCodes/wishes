// Typewriter Effect (auto type, erase, retype)
const typewriterElement = document.querySelector(".typewriter");
const text = "Happy Anniversary,\nDidi & Jiju!"; // Added newline character (\n)

// Function to type the text
function typeWriter(text, i, callback) {
  if (i < text.length) {
    // Check for newline and replace with <br>
    if (text.charAt(i) === '\n') {
      typewriterElement.innerHTML += "<br>";  // Add line break when newline character is encountered
    } else {
      typewriterElement.innerHTML += text.charAt(i);  // Add character normally
    }
    setTimeout(() => typeWriter(text, i + 1, callback), 100);
  } else {
    setTimeout(callback, 500);  // Wait 500ms after typing is done
  }
}

// Function to erase the text
function eraseText(callback) {
  let textContent = typewriterElement.innerHTML;
  let i = textContent.length;
  function erase() {
    if (i > 0) {
      typewriterElement.innerHTML = textContent.substring(0, i - 1);
      i--;
      setTimeout(erase, 50);
    } else {
      callback();  // After erasing, call the callback to start typing again
    }
  }
  erase();
}

// Start typing, erase, and retype
function startTypingEffect() {
  typeWriter(text, 0, () => {
    eraseText(startTypingEffect);  // Erase and retype
  });
}

// Start the auto typewriter effect
startTypingEffect();

// Show Pop-up after 3 seconds, and pop-out after another 3 seconds
setTimeout(() => {
  const popup = document.getElementById("popup");
  popup.style.display = "block"; // Show popup
  popup.classList.add("popup-animation-in"); // Add animation for pop-in effect
  
  // After 3 seconds, pop out the popup
  setTimeout(() => {
    popup.classList.remove("popup-animation-in"); // Remove pop-in animation
    popup.classList.add("popup-animation-out"); // Add pop-out animation
    setTimeout(() => {
      popup.style.display = "none"; // Hide the popup after the pop-out animation completes
    }, 500); // Popup will hide after 0.5 seconds (time for pop-out animation)
  }, 3000); // Popup will stay visible for 3 seconds
}, 3000); // Popup will appear after 3 seconds

// Falling Hearts
const heartContainer = document.getElementById("heart-container");

setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = ["💖", "💝", "💕", "💗"][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.fontSize = 14 + Math.random() * 20 + "px";
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}, 200);
