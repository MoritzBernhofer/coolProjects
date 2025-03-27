let particles = [];
let numParticles = 50;

function setup() {
    createCanvas(800, 600);
    for (let i = 0; i < numParticles; i++) {
        let x = random(width);
        let y = random(height);
        particles.push(new Particle(createVector(x, y)));
    }
}

function draw() {
    background(240);

    // Reset all accelerations
    for (let p of particles) {
        p.acc.set(0, 0);
    }

    // Apply mutual attraction
    for (let i = 0; i < particles.length; i++) {
        for (let j = 0; j < particles.length; j++) {
            if (i !== j) {
                let force = attract(particles[i], particles[j]);
                particles[i].applyForce(force);
            }
        }
    }

    // Update and display all particles
    for (let p of particles) {
        p.update();
        p.show();
    }
}

// Attraction force between two particles
function attract(a, b) {
    let dir = p5.Vector.sub(b.pos, a.pos);
    let distSq = constrain(dir.magSq(), 100, 1000);
    let strength = 5 / distSq; // Inverse square law
    dir.setMag(strength);
    return dir;
}

// Particle class
class Particle {
    constructor(pos) {
        this.pos = pos.copy();
        this.vel = p5.Vector.random2D().mult(0.5);
        this.acc = createVector(0, 0);
    }

    applyForce(force) {
        this.acc.add(force); // Mass = 1 for simplicity
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        // Optional: Wrap around edges
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }

    show() {
        fill(0);
        noStroke();
        ellipse(this.pos.x, this.pos.y, 8, 8);
    }
}
