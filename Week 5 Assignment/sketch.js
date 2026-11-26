/* DN3008 Generative Art, Ashley Hi 2026
 * Week 5 - Randomness & Noise
 * Assignment Example
 */

function setup() {
  createCanvas(500, 500);
  frameRate(60);
  noFill();
}

function draw() {
  background(240, 240, 230);

  // top line
  stroke(0, 157, 244);
  for (var i = 0; i < 2000; i++) {
    var lineX = random(0, 500);
    var lineY = random(0, 30);
    point(lineX, lineY);
  }

  // bottom line
  for (var i = 0; i < 5000; i++) {
    var lineX = random(30, 470);
    var lineY = random(470, 500);
    point(lineX, lineY);
  }

  // left & right lines
  for (var i = 0; i < 4000; i++) {
    var leftLineX = random(0, 30);
    var leftLineY = max(random(0, 500), random(0, 500));
    point(leftLineX, leftLineY);

    var rightLineX = random(500, 470);
    var rightLineY = max(random(0, 500), random(0, 500));
    point(rightLineX, rightLineY);
  }

    // Sun
  push();
  stroke(255, 213, 0);
  translate(80 , 80);
  for (var i = 0; i < 9000; i++) {
    var cirDist = (max(random(0, 1), random(0, 1)) * width) / 5;
    var angle = random(0, PI * 2);
    var c = createVector(cos(angle), sin(angle));
    c.mult(cirDist);
    point(c.x, c.y);
  }
  pop();

  // wave blue
  push();
  stroke(0,0,255);
  translate(0,345);
  var amp = 20;
  for (var i = 0; i < 5000; i++) {
    var waveX = random(30, 470);
    var waveY = cos((waveX / width) * PI * 6) * amp;
    waveY += random(-15, 15);
    point(waveX, waveY);
  }
  pop();

  // wave light blue
  push();
  stroke(50, 150, 255);
  translate(0, 330);
  var amp = 20;
  for (var i = 0; i < 5000; i++) {
    var waveX = random(30, 470);
    var waveY = cos((waveX / width) * PI * 6) * amp;
    waveY += random(-15, 15);
    point(waveX, waveY);
  }
  pop();

  // sand
  push();
  stroke(218, 190, 140); 
  translate(0, 365);
  var amp = 15;
  for (var i = 0; i < 3000; i++) {
    var waveX = random(30, 470);
    var waveY = cos((waveX / width) * PI * 6) * amp;
    waveY += random(-15, 15);
    point(waveX, waveY);
  }
  pop();

    // bottom line
  for (var i = 0; i < 10000; i++) {
    stroke(218, 190, 140);
    var lineX = random(30, 470);
    var lineY = random(365, 470);
    point(lineX, lineY);
  }
}
