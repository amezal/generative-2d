import p5 from 'p5';

export const mySketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
    p.strokeWeight(5);
    p.background('#161a1c');
  };

  p.draw = () => {
    p.circle(100, 100, 100);
  };
};
