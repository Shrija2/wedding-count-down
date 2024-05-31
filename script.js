// Set the date we're counting down to
const launchDate = new Date("Dec 06, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get the current date and time
  const currentTime = new Date().getTime();

  // Calculate the remaining time
  const timeLeft = launchDate - currentTime;

  // Calculate days, hours, minutes, and seconds
  //const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 *12));
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  //document.querySelector(".months").innerHTML = months;
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(x);
    document.querySelector(h1).innerHTML = "MARRIED";
  }
}, 1000);
