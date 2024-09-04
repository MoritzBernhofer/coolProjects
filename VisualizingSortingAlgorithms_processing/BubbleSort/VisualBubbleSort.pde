float[] values;
int i = 0;
int j = 0;

void setup() {
  size(800, 500);
  values = new float[width];
  for (int i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
}

void draw() {
  background(0);

  if (i < values.length) {
    for (int j = 0; j < values.length - i - 1; j++) {
      float a = values[j];
      float b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    noLoop();
  }
  i++;

  for (int i = 0; i < values.length; i++) {
    stroke(255);
    line(i, height, i, height - values[i]);
  }
}

void swap(float[] arr, int pos1, int pos2) {
  float temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}
