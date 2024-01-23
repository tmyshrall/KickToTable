var textArray = [
  "Jonathan",
  "Tyler",
  "Aditya",
  "Ryan",
  "Ryker",
];

function startCountdown() {
  var countdownElement = document.getElementById("countdown");
  var count = 4;

  function updateCountdown() {
    countdownElement.textContent = count;

    if (count <= 0) {
      clearInterval(countdownInterval);
      displayRandomName();
    } else {
      
      countdownElement.style.animation = 'none';
      void countdownElement.offsetWidth;
      countdownElement.style.animation = null; 
    }

    count--;
  }

  var countdownInterval = setInterval(updateCountdown, 1000);
}

function displayRandomName() {
  var countdownElement = document.getElementById("countdown");
  var randomName = textArray[Math.floor(Math.random() * textArray.length)];
  countdownElement.textContent = randomName;
}

window.onload = startCountdown;

