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
  strokeWeight(1);
  fill("#f7e5ca");
  rect(0, 0, paintingSize, paintingSize);

  fill(0);
  stroke(0);

  // top left triangle
  triangle(
    0, 0,
    0, 0.333 * paintingSize,
    triangleTip, 0.333 * paintingSize
  );
  line(0, paintingSize, triangleTip, 0.333 * paintingSize);

  // bottom right triangle
  triangle(
    paintingSize, paintingSize,
    paintingSize, 0.666 * paintingSize,
    paintingSize - triangleTip, 0.666 * paintingSize
  );
  line(paintingSize, 0, paintingSize-triangleTip, 0.666 * paintingSize);

  // center "square"
  quad(
    triangleTip, 0.333 * paintingSize,
    0.333 * paintingSize, paintingSize - triangleTip,
    paintingSize - triangleTip, 0.666 * paintingSize,
    0.666 * paintingSize, triangleTip
  );
}
