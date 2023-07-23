let level = 7; // Number of recursion levels
let size = 400; // Initial size of the triangle

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  drawTriangle(width / 2, height / 2, size, level);
}

function drawTriangle(x, y, size, level) {
  if (level === 0) {
    // Base case: Draw a single triangle
    let h = (sqrt(3) * size) / 2; // Height of the equilateral triangle
    let x1 = x - size / 2;
    let y1 = y + h / 2;
    let x2 = x + size / 2;
    let y2 = y + h / 2;
    let x3 = x;
    let y3 = y - h / 2;

    triangle(x1, y1, x2, y2, x3, y3);
  } else {
    // Recursive case: Divide the triangle into three smaller triangles
    let newSize = size / 2;
    let newLevel = level - 1;

    // Top triangle
    drawTriangle(x, y - newSize / 2, newSize, newLevel);

    // Bottom left triangle
    drawTriangle(x - newSize / 2, y + newSize / 2, newSize, newLevel);

    // Bottom right triangle
    drawTriangle(x + newSize / 2, y + newSize / 2, newSize, newLevel);
  }
}

function mousePressed() {
  if (level < 7) {
    level++;
  } else {
    level = 0;
  }
}
