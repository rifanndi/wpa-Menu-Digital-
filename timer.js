document.addEventListener('DOMContentLoaded', function () {
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
      
        function updateTimer() {
          const now = new Date();
          const targetDate = new Date('2024-01-01T00:00:00'); // Ganti dengan tanggal target hitung mundur
      
          const timeDiff = targetDate - now;
      
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
          daysElement.textContent = padZero(days);
          hoursElement.textContent = padZero(hours);
          minutesElement.textContent = padZero(minutes);
          secondsElement.textContent = padZero(seconds);
        }
      
        function padZero(number) {
          return number < 10 ? `0${number}` : number;
        }
      
        // Update timer setiap detik
        setInterval(updateTimer, 1000);
      
        // Pertama kali panggil fungsi updateTimer agar timer sudah terupdate saat halaman dimuat
        updateTimer();
      });
      