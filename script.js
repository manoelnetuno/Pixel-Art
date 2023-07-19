const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 25; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixelBoard.appendChild(pixel);
}
function selectColor(colorElement) {
  const colorElements = document.querySelectorAll('.color');

  colorElements.forEach((element) => {
    if (element === colorElement) {
      element.classList.add('selected');
    } else {
      element.classList.remove('selected');
    }
  });
}