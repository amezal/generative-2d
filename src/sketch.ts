import p5 from 'p5';

export const mySketch = (p: p5) => {
  const diameter = 40;
  let x: number;
  let y: number;
  let totalTime: number;
  let totalDistance: number;
  let speed: number;

  p.setup = () => {
    // Setup canvas
    p.createCanvas(400, 400);
    p.noStroke();
    p.background(22, 26, 28);
    p.frameRate(60);

    // Set variables
    x = 0 + diameter / 2
    y = p.height / 2;
    totalTime = 3 * 1000;
    totalDistance = p.width - diameter;
    speed = totalDistance / totalTime;
    console.log(`Time: ${totalTime}, Distance: ${totalDistance}, Speed: ${speed}px/s`);
  };

  p.draw = () => {
    p.background(22, 26, 28)
    const alpha = p.map(x, 0, p.width, 255, 0);
    p.fill(255, alpha);
    p.circle(x, y, diameter);
    x += speed * p.deltaTime;
  };
};
