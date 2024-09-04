package org.example;

public class RecursiveQuickSort {
    public static void quickSort_Re(int[] array, int start, int end) {
        if (start < end) {
            int pivot = partition(array, start, end);

            quickSort_Re(array, start, pivot - 1);

            quickSort_Re(array, pivot + 1, end);
        }
    }

    private static int partition(int[] array, int start, int end) {
        //pivot at the end
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
