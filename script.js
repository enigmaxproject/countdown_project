// Function to generate random numbers for the countdown
 
    function updateCountdown() {
      const randomDays = Math.floor(Math.random() * 100);
      const randomHours = Math.floor(Math.random() * 24);
      const randomMinutes = Math.floor(Math.random() * 60);
      const randomSeconds = Math.floor(Math.random() * 60);
      const randomMilliseconds = Math.floor(Math.random() * 1000);

      // Update DOM elements for days
      const days = randomDays.toString().padStart(2, '0');
      document.getElementById('days-tens').textContent = days[0];
      document.getElementById('days-units').textContent = days[1];

      // Update DOM elements for hours
      const hours = randomHours.toString().padStart(2, '0');
      document.getElementById('hours-tens').textContent = hours[0];
      document.getElementById('hours-units').textContent = hours[1];

      // Update DOM elements for minutes
      const minutes = randomMinutes.toString().padStart(2, '0');
      document.getElementById('minutes-tens').textContent = minutes[0];
      document.getElementById('minutes-units').textContent = minutes[1];

      // Update DOM elements for seconds
      const seconds = randomSeconds.toString().padStart(2, '0');
      document.getElementById('seconds-tens').textContent = seconds[0];
      document.getElementById('seconds-units').textContent = seconds[1];

      // Update DOM elements for milliseconds
      const milliseconds = randomMilliseconds.toString().padStart(3, '0');
      document.getElementById('milliseconds-hundreds').textContent = milliseconds[0];
      document.getElementById('milliseconds-tens').textContent = milliseconds[1];
      document.getElementById('milliseconds-units').textContent = milliseconds[2];
    }

    // Update every 100 milliseconds to simulate the Matrix effect
    setInterval(updateCountdown, 100);

    // Initial call to display the countdown immediately
    updateCountdown()
