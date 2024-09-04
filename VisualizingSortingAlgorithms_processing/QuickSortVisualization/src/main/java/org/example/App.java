package org.example;

import processing.core.PApplet;

import java.util.*;

import static org.example.RecursiveQuickSort.quickSort_Re;

public class App extends PApplet {
    private int[] array = getShuffledArray(0, 120);
    private int lineSize = 10;
    private int[] gradientColors = {color(214,94,236), color(1,157,130)};
    private IterativeQuickSort iterativeQuickSort = new IterativeQuickSort();

    @Override
    public void settings() {
        size(1200, 1200);
    }

    @Override
    public void setup() {
        background(0);
    }

    @Override
    public void draw() {
        background(0);
        drawLines();
        iterativeQuickSort.quickSort_It(array, 0, array.length -1);
    }

    public void drawLines() {
        for (int value : array) {
            stroke(255);
            drawLineWithGradientStroke(value);
        }
    }

    public void mouseClicked() {
        //quickSort_Re(array, 0, array.length - 1);
    }

    private void drawLineWithGradientStroke(int value) {
        int startX = value * lineSize;
        int startY = height;
        int endX = value * lineSize;
        int endY = (height - array[value] * lineSize) + 1;


        drawGradientStroke(startX, startY, endX, endY);
    }

    private void drawGradientStroke(float startX, float startY, float endX, float endY) {
        int gradientResolution = 1000;

        for (int i = 0; i < gradientResolution; i++) {
            float inter = map(i, 0, gradientResolution-1, 0, 1);

            int c = lerpColor(gradientColors[0], gradientColors[1], inter);

            stroke(c);
            strokeWeight(1);

            float x = lerp(startX, endX, inter);
            float y = lerp(startY, endY, inter);

            strokeWeight(7);
            point(x, y);
        }
    }

    private int[] getShuffledArray(int from, int to) {
        List<Integer> list = new ArrayList<Integer>();

        for (int i = from; i < to; i++) {
            list.add(i);
        }

        Collections.shuffle(list);

        return list.stream().mapToInt(i -> i).toArray();
    }
}
