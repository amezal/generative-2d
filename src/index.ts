import p5 from "p5";
import { mySketch } from "./sketch";

const parentElement: HTMLElement = document.querySelector('#sketch')!;
new p5(mySketch, parentElement);
