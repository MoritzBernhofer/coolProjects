let x = 2.0;
let y = 1.0;
let z = 0.1;

let t = 0;
let dt = 0.003;

let sigma = 28;
let rho = 46.92;
let beta = 4;

let points = [];

function setup() {
    createCanvas(1500, 1500, WEBGL);
    colorMode(HSB);
    background(0);
}

function draw() {
    background(0);
    orbitControl();

    for (let index = 0; index < 15; index++) {
        let dx = sigma * (y - x);
        let dy = x * (rho - z) - y;
        let dz = x * y - beta * z;

        x += dx * dt;
        y += dy * dt;
        z += dz * dt;

        t = t + 1;

        points.push(new p5.Vector(x, y, z));
    }

    strokeWeight(3);
    noFill();

    let h = 0;

    //beginShape();

    for (let i = 0; i < points.length - 1; i++) {
        stroke(h, 255, 255);
        line(
            points[i].x * 10,
            points[i].y * 10,
            points[i].z * 10,
            points[i + 1].x * 10,
            points[i + 1].y * 10,
            points[i + 1].z * 10
        );

        h += 0.1;

        if (h > 255) {
            h = 0;
        }
    }

    //endShape();
}
