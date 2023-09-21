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

  // top shapes
  rect(0, paintingSize / 2, paintingSize / 2, paintingSize / 2);
  triangle(
    paintingSize / 2, paintingSize / 2,
    paintingSize - trapezePoint, paintingSize / 2,
    paintingSize / 2, paintingSize
  );

  // bottom shapes
  rect(paintingSize / 2, 0, paintingSize / 2, paintingSize / 2);
  triangle(
    paintingSize / 2, 0,
    paintingSize / 2, paintingSize / 2,
    trapezePoint, paintingSize / 2,
  );
}
