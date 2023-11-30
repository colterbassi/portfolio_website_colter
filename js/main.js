console.log("whats up")

var text1 = "hello"

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    var x += ' responsive';
  }

  function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }