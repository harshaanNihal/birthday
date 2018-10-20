

// var back = document.querySelector(".body");
function makeRandomColor() {
  var values = '0123456789ABCDEF';
  var color = "";
  for (var i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random() * 16)];
  }
  return `#${color}`;

}

  setInterval(changeColor, 1000);

  var col = document.querySelector('#body');

function changeColor() {
  col.style.background = 'linear-gradient(' + 'to top left' + ', ' + makeRandomColor() + ', ' + makeRandomColor() +','+ makeRandomColor() + ')';
}


