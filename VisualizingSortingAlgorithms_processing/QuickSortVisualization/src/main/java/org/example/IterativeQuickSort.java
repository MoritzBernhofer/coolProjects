package org.example;

import java.util.Stack;

public class IterativeQuickSort {
    private Stack<Integer> stack;

    public IterativeQuickSort() {
        stack = new Stack<>();
    }

    public void quickSort_It(int[] array, int start, int end) {
        if (start < end) {
            if (!stack.isEmpty()) {
                end = stack.pop();
                start = stack.pop();
            }

            int pivot = partition(array, start, end);

            if (pivot - 1 > start) {
                stack.push(start);
                stack.push(pivot - 1);
            }

            if (pivot + 1 < end) {
                stack.push(pivot + 1);
                stack.push(end);
            }
        }
    }

    private int partition(int[] array, int start, int end) {
        int pivot = array[end];
        int i = start - 1;

        for (int j = start; j <= end - 1; j++) {
            if (array[j] < pivot) {
                i++;
                swap(array, i, j);
            }
        }

        swap(array, i + 1, end);

        return i + 1;
    }
    private static void swap(int[] array, int i, int j) {
        int tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
}