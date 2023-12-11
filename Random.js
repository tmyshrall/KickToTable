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

function shouldRandomize() {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  var currentMinutes = currentDate.getMinutes();


  if (currentHour >= 8 && currentHour < 14) {
    var randomIndex = getRandomIndex(textArray.length);
    return textArray[randomIndex] + " is being kicked!";
  } else {
    return "????? is being kicked!";
  }
}

function randomizeIfTime() {
  var message = shouldRandomize();
  if (typeof message === "string") {
    updateRandomText(message);
  }
}

var randomizeButton = document.getElementById("randomizeButton");
randomizeButton.addEventListener("click", randomizeIfTime);

randomizeIfTime();


