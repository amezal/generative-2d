import p5 from 'p5';

export const mySketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.strokeWeight(5);
    p.background(255);
  };

  p.draw = () => {
    p.circle(100, 100, 100);
  };
};
