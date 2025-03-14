let entities = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(155);
    textSize(52);
    fill(0, 102, 153);
    text("Click anywhere to place Particels", 10, 60);

    for (let i = 0; i < entities.length; i++) {
        entities[i].GetNextStep();
        entities[i].show();
    }
}

function mousePressed() {
    entities.push(
        new Entity(mouseX + random(-20, 20), mouseY + random(-20, 20))
    );
}

class Entity {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.history = [];
        let rd = round(random(0, 2));
        //console.log(rd);
        if (rd == 1) {
            this.type = "entity";
        } else {
            this.type = "random_entity";
        }
    }

    GetNextStep() {
        let value = 10;
        let randomnis = 0.3;
        if (this.type == "entity") {
            if (this.x < mouseX)
                this.x += 1 + random(0, value) / (value * randomnis);
            else if (this.x > mouseX)
                this.x -= 1 + random(0, value) / (value * randomnis);
            if (this.y < mouseY)
                this.y += 1 + random(0, value) / (value * randomnis);
            else if (this.y > mouseY)
                this.y -= 1 + random(0, value) / (value * randomnis);
        } else if (this.type == "random_entity") {
            this.x += random(-value, value);
            this.y += random(-value, value);
        }
        //console.log("i am an " + this.type);
        let vector = createVector(this.x, this.y);
        this.history.push(vector);

        if (this.history.length > 100) {
            this.history.splice(0, 1);
        }
        for (let i = 0; i < this.history.length; i++) {
            this.history[i].x += random(-1, 1);
            this.history[i].y += random(-1, 1);
        }
    }
    show() {
        stroke(0);
        beginShape();
        for (let i = 0; i < this.history.length; i++) {
            noFill();
            vertex(this.history[i].x, this.history[i].y);
        }
        endShape();

        noStroke();
        fill(200);
        ellipse(this.x, this.y, 10, 10);
    }
}
