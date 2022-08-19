window.addEventListener("scroll", function() {
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 0);
})


const SIZE = 500;
const SQUARE_SIZE = 20;
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let currentDir = 'right';

class Food {
  constructor() {
    this.size = SQUARE_SIZE;
    this.pos = [0, 0];
    this.setRandomPos();
  }
  
  setRandomPos() {
    this.pos[0] = Math.round(Math.random() * SIZE % ((SIZE / this.size) -1));
    this.pos[1] = Math.round(Math.random() * SIZE % ((SIZE / this.size) -1));
  }
  
  draw() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.pos[0] * this.size, this.pos[1] * this.size, this.size, this.size);
  }
}

class Box {
  constructor(x, y, ) {
    this.pos = [x, y];
    this.old_pos = [0, 0];
    this.size = SQUARE_SIZE;
  }
  
  OutOfMap() {
    if (this.pos[0] < 0) {
      this.pos[0] = (SIZE / this.size);
    } else if (this.pos[0] > (SIZE / this.size)) {
      this.pos[0] = 0;
    }
    if (this.pos[1] < 0) {
      this.pos[1] = (SIZE / this.size);
    } else if (this.pos[1] > (SIZE / this.size)) {
      this.pos[1] = 0;
    }
  }
  
  setPos(x, y) {
    this.old_pos = [this.pos[0], this.pos[1]];
    this.pos = [x, y];
  }
  
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.pos[0] * this.size, this.pos[1] * this.size, this.size, this.size);
  }
}

class Snake {
  constructor() {
    this.pos = [0, 0];
    this.box_size = SQUARE_SIZE;
    this.boxes = [];
    this.alive = true;
    this.addBox(this.pos[0], this.pos[1]);
  }
  
  addBox(x, y) {
    const box = new Box(x, y, this.box_size);
    this.boxes.push(box);
  }
  
  move() {
    const head = this.boxes[0];
    head.old_pos = [head.pos[0], head.pos[1]];
    
    switch (currentDir) {
      case 'left':
        head.pos[0] -= 1;
        break;
      case 'right':
        head.pos[0] += 1;
        break;
      case 'up':
        head.pos[1] -= 1;
        break;
      case 'down':
        head.pos[1] += 1;
        break;
      default:
        break;
    }
    head.OutOfMap();
  }
  
  calcNewBoxPos() {
    let {x, y} = this.boxes[this.boxes.length -1];

    switch (currentDir) {
      case 'left':
        x += 1;
        break;
      case 'right':
        x -= 1;
        break;
      case 'up':
        y += 1;
        break;
      case 'down':
        y -= 1;
        break;
      default:
        break;
    }
    return {x, y};
  }
  
  eat() {
    const head = this.boxes[0];
    
    if (head.pos[0] == food.pos[0] && head.pos[1] == food.pos[1]) {
      food.setRandomPos();
      this.addBox(this.calcNewBoxPos());
    }
  }
  
  boxTouchHead(box) {
    const head = this.boxes[0];
    return (head.pos[0] == box.pos[0] && head.pos[1] == box.pos[1]);
  }
  
  update() {
    this.move();
    this.eat();
    for (const [i, box] of this.boxes.entries()) {
      if (i > 0) {
        box.setPos(this.boxes[i - 1].old_pos[0], this.boxes[i - 1].old_pos[1]);
      }
      if (i > 0 && this.boxTouchHead(box)) {
        this.alive = false;
      }
      box.draw();
    }
  }
}

const snake = new Snake();
const food = new Food();

function eventKeyPressed() {
  document.addEventListener('keydown', function(event) {
    switch (event.key) {
      case 'ArrowLeft':
        currentDir = 'left';
        break;
      case 'ArrowRight':
        currentDir = 'right';
        break;
      case 'ArrowUp':
        currentDir = 'up';
        break;
      case 'ArrowDown':
        currentDir = 'down';
        break;
      default:
        break;
    }
  }) 
}

function clear() {
  ctx.clearRect(0, 0, SIZE, SIZE);
}

function update() {
  clear();
  food.draw();
  snake.update();
  if (snake.alive)
    setTimeout(update, 200);
}

function start() {
  eventKeyPressed();
  update();
}

start();