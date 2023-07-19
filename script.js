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
function FillPixel() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.addEventListener('click', () => {
      const selectedColor = document.querySelector('.selected');
      if (selectedColor) {
        pixel.style.backgroundColor = selectedColor.style.backgroundColor;
      }
    });
  });
}

selectColor();
FillPixel();
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  });
}
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);