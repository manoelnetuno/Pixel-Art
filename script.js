const pixelBoard = document.getElementById('pixel-board');

for (let i = 0; i < 25; i++) {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixelBoard.appendChild(pixel);
}