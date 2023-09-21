let paintingSize = 300;
let triangleTip = 0.47 * paintingSize;
let trapezePoint = 0.333 * paintingSize;

function setup() {
  createCanvas(paintingSize + 2 * 20, paintingSize + 2 * 20);
}

function draw() {
  background(255);

  // painting background
  translate(20, 20);
  stroke(0);
  fill("#f7e5ca");
  rect(0, 0, paintingSize, paintingSize);

  strokeWeight(1.5);
  fill(0);

  // top part of the painting
  quad(
    0.6 * paintingSize, 0,
    0.85 * paintingSize, 0.15 * paintingSize,
    0.6 * paintingSize, 0.3 * paintingSize,
    0.35 * paintingSize, 0.15 * paintingSize
  );

  line(
    0.6 * paintingSize, 0,
    0.15 * paintingSize, 0.27 * paintingSize
  );
  line(
    0, 0,
    0.15 * paintingSize, 0.27 * paintingSize
  );

  // bottom part of the painting
  quad(
    paintingSize - 0.6 * paintingSize, paintingSize - 0,
    paintingSize - 0.85 * paintingSize, paintingSize - 0.15 * paintingSize,
    paintingSize - 0.6 * paintingSize, paintingSize - 0.3 * paintingSize,
    paintingSize - 0.35 * paintingSize, paintingSize - 0.15 * paintingSize
  );

  line(
    paintingSize - 0.6 * paintingSize, paintingSize,
    paintingSize - 0.15 * paintingSize, paintingSize - 0.27 * paintingSize
  );
  line(
    paintingSize, paintingSize,
    paintingSize - 0.15 * paintingSize, paintingSize - 0.27 * paintingSize
  );
}
