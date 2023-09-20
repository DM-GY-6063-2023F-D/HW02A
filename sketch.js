let paintingSize = 300;
let triangleTip = 0.47 * paintingSize;
let trapezePoint = 0.333 * paintingSize;

function setup() {
  createCanvas(paintingSize + 2 * 20, 3 * paintingSize + 4 * 20);
}

function draw() {
  background(255);

  // first painting
  translate(20, 20);

  stroke(0);
  strokeWeight(1);
  fill("#f7e5ca");
  rect(0, 0, paintingSize, paintingSize);

  fill(0);
  stroke(0);
  triangle(0, 0, 0, 0.333 * paintingSize, triangleTip, 0.333 * paintingSize);
  line(0, paintingSize, triangleTip, 0.333 * paintingSize);

  triangle(paintingSize, paintingSize, paintingSize, 0.666 * paintingSize, paintingSize-triangleTip, 0.666 * paintingSize);
  line(paintingSize, 0, paintingSize-triangleTip, 0.666 * paintingSize);

  quad(
    triangleTip, 0.333 * paintingSize,
    0.333 * paintingSize, paintingSize - triangleTip,
    paintingSize - triangleTip, 0.666 * paintingSize,
    0.666 * paintingSize, triangleTip
  );

  // second painting
  translate(0, paintingSize + 20);

  stroke(0);
  fill("#f7e5ca");
  rect(0, 0, paintingSize, paintingSize);

  strokeWeight(1.5);
  fill(0);
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

  // third painting
  translate(0, paintingSize + 20);

  stroke(0);
  strokeWeight(1);
  fill("#f7e5ca");
  rect(0, 0, paintingSize, paintingSize);

  fill(0);
  rect(0, paintingSize / 2, paintingSize / 2, paintingSize / 2);
  triangle(
    paintingSize / 2, paintingSize / 2,
    paintingSize - trapezePoint, paintingSize / 2,
    paintingSize / 2, paintingSize
  );

  rect(paintingSize / 2, 0, paintingSize / 2, paintingSize / 2);
  triangle(
    paintingSize / 2, 0,
    paintingSize / 2, paintingSize / 2,
    trapezePoint, paintingSize / 2,
  );
}
