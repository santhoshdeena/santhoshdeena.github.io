// Set the wedding date (YYYY, MM-1, DD)
const weddingDate = new Date(2025, 1, 14); // February is month 1 (0-indexed)

function updateCountdown() {
  const now = new Date();
  const timeDifference = weddingDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

  // If the wedding date has passed
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown').innerHTML = "<p>We're married! Thank you for celebrating with us!</p>";
  }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
