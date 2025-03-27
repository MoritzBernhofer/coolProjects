// /// <reference path="p5/p5.js" />
//
// const particles = [];
//
// function setup() {
//     createCanvas(windowWidth, windowHeight);
//
//     for (let i = 0; i < 100; i++) {
//         particles.push(new Particle(Math.random() * windowWidth
//             , Math.random() * windowHeight))
//     }
// }
//
// function draw() {
//     background('red');
//     particles.forEach(particle => particle.draw());
//     particles.forEach(particle => particle.calc());
// }
//
// function Particle(x, y) {
//     this.pos = createVector(x, y);
//     this.vel = createVector((Math.random() * 2) - 1, (Math.random() * 2) - 1);
//     this.acc = createVector(Math.random(), Math.random());
//
//     this.draw = function () {
//         const t_x =
//         const t_y =
//
//         this.vel.x = t_x;
//         this.vel.y = t_y;
//
//         this.pos.add(this.vel);
//
//         circle(this.pos.x, this.pos.y, 10);
//     }
//
//     this.calc = function () {
//         this.vel.x = (mouseX + this.pos.x) / windowWidth;
//         this.vel.y = (mouseY + this.pos.y) / windowHeight;
//         this.pos.add(this.vel);
//     }
// }