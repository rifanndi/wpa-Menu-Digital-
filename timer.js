document.addEventListener('DOMContentLoaded', function () {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  let countdownTime = 60; // Set the initial countdown time to 3 minutes (in seconds)

  function updateTimer() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;

    daysElement.textContent = '00';
    hoursElement.textContent = '00';
    minutesElement.textContent = padZero(minutes);
    secondsElement.textContent = padZero(seconds);

    if (countdownTime > 0) {
      countdownTime--;
    } else {
      // Display a message when the timer reaches 0
      prompt('Meja nomer berapa');

      // Redirect to index.html after pressing OK in the alert
      window.location.href = 'index.html';
    }
  }

  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  // Update timer every second
  setInterval(updateTimer, 1000);

  // Call the updateTimer function initially to update the timer when the page is loaded
  updateTimer();
});
