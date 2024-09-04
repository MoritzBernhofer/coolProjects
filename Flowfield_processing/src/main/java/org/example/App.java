package org.example;

import processing.core.PApplet;
import processing.core.PConstants;
import processing.core.PVector;

import java.util.ArrayList;
import java.util.List;

public class App extends PApplet {
    private float[][] grid;
    private List<Point> points = new ArrayList();
    private int boxSize = 8;

    private float offSetValue = 0.1F;
    private float zOffSet = 0;

    private int[] color = new int[]{Math.round(random(255)), Math.round(random(255)), Math.round(random(255))};


    @Override
    public void settings() {
        fullScreen();

        grid = new float[Math.round(displayWidth / boxSize)][Math.round(displayHeight / boxSize)];
    }

    @Override
    public void setup() {
        background(255);
        frameRate(120);
        noiseDetail(30);

        for (int i = 0; i < 1000; i++) {
            points.add(new Point(random(displayWidth), random(displayHeight)));
        }
    }

    @Override
    public void draw() {
        //background(0);
        updateGrid();
        updatePoints();


        //displayGrid();
        displayPoints();
        System.out.println(frameRate);
    }

    private void displayPoints() {
        points.forEach((point) -> {
            push();
            int[] color = point.getRgb();
            PVector prevPos = point.prevPos();

            stroke(200, 100, 250, 20);

            if(dist(prevPos.x, prevPos.y, point.getX(), point.getY()) < 100){
                line(prevPos.x, prevPos.y, point.getX(), point.getY());
            }


            pop();
        });
    }

    private void updatePoints() {
        points.forEach((point) -> {
            int x = Math.min(Math.round(point.getX() / boxSize), grid.length - 1);
            int y = Math.min(Math.round(point.getY() / boxSize), grid[0].length - 1);

            point.updatePos(grid[x][y] * PConstants.TWO_PI * 4, displayWidth, displayHeight);

        });
    }

    private void updateGrid() {
        float yOffSet = 0;
        for (int i = 0; i < grid.length; i++) {
            float xOffSet = 0;
            for (int j = 0; j < grid[i].length; j++) {
                grid[i][j] = noise(xOffSet, yOffSet, zOffSet);
                xOffSet += offSetValue;

            }
            yOffSet += offSetValue;
        }
        zOffSet += 0.003F;
    }

    private void displayGrid() {
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                //int[] color = convertToPink(Math.round(grid[i][j] * 255));
                //fill(color[0], color[1], color[2]);
                //noStroke();
                //rect(i * boxSize, j * boxSize, boxSize, boxSize);
                push();
                translate(i * boxSize, j * boxSize);
                stroke(255);
                rotate(grid[i][j]  * PConstants.TWO_PI * 4);
                line(0, 0, boxSize, 0);
                pop();
            }
        }
    }

    public static int[] convertToPink(int grayscaleValue) {
        // Ensure the grayscale value is within the valid range
        grayscaleValue = Math.min(255, Math.max(0, grayscaleValue));

        // Convert grayscale to pink scale
        int red = grayscaleValue; // Set red component to grayscale value
        int green = 100; // Set green component to a constant value (you can adjust as needed)
        int blue = 150 + grayscaleValue / 2; // Adjust blue component based on grayscale value

        // Return RGB components as int array
        return new int[]{red, green, blue};
    }
}
