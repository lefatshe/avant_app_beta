

function on() {
    document.getElementById("overlay").style.display = "block";
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }

(function() {

// Count down
var countDownDate = new Date("May 18, 2019 14:30:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in an element with id="demo"
    var daysVar = "<div class='li'>" + days + "<small> days </small></div>";
    var hoursVar = "<div class='li'>" +  hours + "<small> hours </small></div>";
    var minVar = "<div class='li'>" + minutes + "<small> minutes </small></div>";
    var secsVar = "<div class='li'>" + seconds + "<small> seconds </small></div>";
  document.getElementById("demo").innerHTML = "<div class='count-t'>" + daysVar + hoursVar + minVar + secsVar + "</div>";

  var width = $(window).width();
  if (width <= 380) {
    $('body').addClass('mobi-friendly');
    document.getElementById("mobile-count").innerHTML = "<div class='count-t'>" + daysVar + hoursVar + minVar + secsVar + "</div>";
  } else {
    $('body').removeClass('mobi-friendly');
  }

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

    var tiny = $('#tiny').tiny().data('api_tiny');

    $(window).on('load', function(){
      $(".se-pre-con").fadeOut();
        $(".se-pre-txt").fadeOut()
    });

 })();
