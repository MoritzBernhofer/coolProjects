package org.example;

import processing.core.PApplet;
import processing.core.PVector;

public class Point extends PApplet {
    private final PVector vel;
    private final PVector acc;
    private int[] rgb;
    private PVector pos;
    private PVector prevPos;

    public Point(float x, float y) {
        this.pos = new PVector(x, y);
        this.vel = new PVector(0, 0);
        this.acc = new PVector(0, 0);
        this.rgb = new int[]{0, 0, 0};
    }

    public void updatePos(float angle, int maxX, int maxY) {
        prevPos = new PVector(pos.x, pos.y);

        PVector gridV = PVector.fromAngle(angle);
        acc.add(gridV);
        vel.add(acc);
        vel.limit(4);
        pos.add(vel);
        acc.mult(0);


        if (pos.x < 0) {
            pos.x = maxX;
        } else if (pos.x > maxX) {
            pos.x = 0;
        }

        if (pos.y < 0) {
            pos.y = maxY;
        } else if (pos.y > maxY) {
            pos.y = 0;
        }
    }

    public PVector prevPos() {
        return prevPos;
    }

    public int[] getRgb() {
        return rgb;
    }

    public float getX() {
        return pos.x;
    }

    public float getY() {
        return pos.y;
    }
}
