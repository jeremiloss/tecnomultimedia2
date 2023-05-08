let prevMouseX, prevMouseY;
let graphics;
function setup() {
  createCanvas(windowWidth, windowHeight);
  graphics = createGraphics(width, height);
  graphics.clear;
  background(243, 235, 226);
  noStroke();
  noCursor();
  prevMouseX = mouseX;
  prevMouseY = mouseY;
}

function draw() {
  // Verificar si el mouse está en movimiento
  if (mouseX !== prevMouseX || mouseY !== prevMouseY) {
    let brushSize = random(22, 25);
    let brushColor = color(247, 208, 20, random(200, 220));
    fill(brushColor);
    let distance = dist(mouseX, mouseY, prevMouseX, prevMouseY);
    let steps = distance / brushSize + 60;
    let stepX = (mouseX - prevMouseX) / steps;
    let stepY = (mouseY - prevMouseY) / steps;
    for (let i = 0; i < steps; i++) {
      ellipse(prevMouseX + stepX * i, prevMouseY + stepY * i, brushSize, brushSize);
    }
    // Actualizar la posición anterior del mouse
    prevMouseX = mouseX;
    prevMouseY = mouseY;
  }
  image(graphics, 0, 0);
}
