window.addEventListener("scroll", function() {
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 0);
})

const canvas = document.getElementById('game');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeInfo = document.getElementById('size');
const colorInfo = document.getElementById('color');
const clearBtn = document.getElementById('clear');
const ctx = canvas.getContext('2d');

let size = 5;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', (mouse) => {
  isPressed = true;
  x = mouse.offsetX;
  y = mouse.offsetY;
});

canvas.addEventListener('mouseup', (mouse) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});


canvas.addEventListener('mousemove', (mouse) => {
  if (isPressed) {
    const x2 = mouse.offsetX;
    const y2 = mouse.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2)
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}

increaseBtn.addEventListener('click', () => {
  if (size < 80) {
    size++;
    updateSizeOnScreen()
  }
})

decreaseBtn.addEventListener('click', () => {
  if (size > 1) {
    size--;
    updateSizeOnScreen()
  }
})

colorInfo.addEventListener('change', (a) => {
  color = a.target.value;
})

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

function updateSizeOnScreen() {
  sizeInfo.innerText = size;
}