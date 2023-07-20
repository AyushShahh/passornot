const words = "Well, exams are approaching and I know neither of you gaf but as the results are going to take painfully three months to come out, I trained a neural network to predict it now";
const wordArray = words.split(" ");
let i = 0;
let timer;

typingEffect();

function typingEffect() {
  const targetElement = document.getElementById('word');
  const newWord = document.createElement('span');
  newWord.textContent = " " + wordArray[i];
  newWord.style.opacity = 0;
  targetElement.appendChild(newWord);
  
  // Animate the opacity from 0 to 1
  let opacity = 0;
  const fadeIn = setInterval(function() {
    opacity += 0.05;
    newWord.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(fadeIn);
    }
  }, 50);
  
  i++;
  
  if (i === wordArray.length) {
    clearTimeout(timer); // Stop the typing effect
  } else {
    // if (wordArray[i] === "Well") {
    //   targetElement.appendChild(document.createElement('br')); // Add a line break
    //   targetElement.appendChild(document.createElement('br'));
    // }
    timer = setTimeout(typingEffect, 150); // Delay before typing the next word
  }
}
