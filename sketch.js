var colores = [
  "blue",
  "brown",
  "green",
  "orange"  
  ];
var colores_random = colores[Math.floor(Math.random)];

// /Users/MacBook/Desktop/GEN ART CURATED/Bloquecitos_de_colores_2022_11_13_01_23_  

var x = [];
var y = [];
var sz = [];
var col = [];
var seed = fxrand;
var num = 50

/**
 * Generate a random number between min and max
 * @param {number} min - The minimum number
 * @param {number} max - The maximum number
 * @return {number} The random number
 */

function genR(min, max) {
  let result = 0;
  if (!max) {
    result = fxrand() * (min - 0) + 0;
  } else {
    result = fxrand() * (max - min) + min;
  }
  return result;
}

/**
 * This is a multi-line Google style docstring.
 *
 * @param {string} seed - The seed for the random number generator.
 * @return {string} The seed for the random number generator.
 */

function setup() {
  genR(seed);
  createCanvas(windowWidth, windowHeight);
  background(0)
  extraCanvas = createGraphics(windowWidth, windowHeight);
  background(genR(255), genR(255), genR(255));

  frameRate(8);
  for (let i = 0; i < num; i++) {
    x[i] = genR(0, width)
    y[i] = genR(0, height)
    sz[i] = genR(10, 50)
    col[i] = genR(0, 255)
    // col[i] = genR(0, 255)
  }

  // for (var i = 0; i < 50; i++) {
  //   x = append(x, genR(width));
  //   y = append(y, genR(height));
  //   sz = append(sz, genR(0, 50));
  // }
}

/**
 * Draws the canvas.
 *
 * @return {void}
 */

function draw() {

  image(extraCanvas, 0, 0);


  for (var i = 0; i < x.length; i++) {

    extraCanvas.push();

    var steps = sz[i];
    var xStep = x[i] / steps;
    var yStep = y[i] / steps;

    for (var j = 0; j < sz[i]; j += steps) {
      extraCanvas.fill(col[i]);
      
      let ang = frameCount * steps;
      let x = xStep * yStep;   
      if (x[i] = 0 && y[i] > 0) {
        x += ang;
        y += ang;
      }
      extraCanvas.translate(x, genR(height));

      extraCanvas.rotate(steps + ang);

      extraCanvas.strokeWeight(genR(.3, .7));

      extraCanvas.stroke(genR(255), genR(255), genR(255), genR(255));

      extraCanvas.fill(colores, genR(55), genR(255), genR(30, 50));

      extraCanvas.ellipse(genR(2), tan(2) - sin(i), genR(i), genR(i) - 2, genR(i), genR(i) - 2);
    }
    extraCanvas.pop();
  }

  if (isFxpreview == true) {
    fxpreview();
  }
  if (frameCount == 25) {
    extraCanvas.blendMode(BLEND);
    // extraCanvas.blendMode(ADD);
  }
  console.log(frameCount);
  if (frameCount == 150) {
    noLoop();
  }
}

/**
 * This function will download the first 5 seconds of the animation!
 */

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}