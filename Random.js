var textArray = [
  "Tyler",
  "Jonathan",
  "Aditya",
  "Ryan",
  "Ryker",
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function updateRandomText(message) {
  var randomTextElement = document.getElementById("randomText");

  randomTextElement.classList.add("transform-transition");

  randomTextElement.style.transform = "scale(0.65)";

  randomTextElement.textContent = message;

  setTimeout(function () {
    randomTextElement.style.transform = "scale(1)";
  }, 150);

  setTimeout(function () {
    randomTextElement.classList.remove("transform-transition");
  }, 300);
}

function setInitialText() {
  var initialMessage = "????? is being kicked";
  updateRandomText(initialMessage);
  document.getElementById("randomizeButton").disabled = true;
}

function getRandomPerson() {
  var randomIndex = getRandomIndex(textArray.length);
  return textArray[randomIndex];
}

function revealPerson() {
  var message = getRandomPerson() + " is being kicked!";
  updateRandomText(message);
  document.getElementById("randomizeButton").disabled = false;  
  document.getElementById("revealButton").disabled = true;
}

var randomizeButton = document.getElementById("randomizeButton");
randomizeButton.addEventListener("click", function () {
  var message = getRandomPerson() + " is being kicked!";
  updateRandomText(message);

  
  document.getElementById("revealButton").disabled = false;
});


setInitialText();