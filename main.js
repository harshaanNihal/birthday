const body = document.querySelector('#body');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function makeRandomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  body.style.background = `linear-gradient(to top left, ${makeRandomColor()}, ${makeRandomColor()}, ${makeRandomColor()})`;
}

changeColor();
if (!reduceMotion.matches) {
  setInterval(changeColor, 1000);
}
