(() => {
    function countdown(dateString) {
      var endDate = new Date(dateString).getTime();
      var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = endDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.querySelector('.timer').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
          clearInterval(x);
          document.querySelector('.timer').innerHTML = "EXPIRED";
        }
      }, 1000);
    }
    
    var dateElement = document.querySelector('.timer');
    var countdownInterval = null;
  
    dateElement.addEventListener('mouseover', function() {
      countdownInterval = setInterval(function() {
        countdown('AUGUST 19, 2023');
      }, 1000);
    });
  
    dateElement.addEventListener('mouseout', function() {
      clearInterval(countdownInterval);
      document.querySelector('.timer').innerHTML = 'AUGUST 19, 2023';
    });
  })();
  