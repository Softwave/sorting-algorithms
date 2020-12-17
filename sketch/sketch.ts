// Sorting algorithms

let values: number[] = [];
let i: number = 0;
let j: number = 0;
let comparisons = 0;
let sortNumber: number = 1;
let sizeMod = 4;

const setup = () => {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < width / sizeMod; i++) {
    values.push(random(height));
  }
  console.log(values);
};

const resetSort = () => {
  values = [];
  for (let i = 0; i < width / sizeMod; i++) {
    values.push(random(height));
  }
  i = 0;
  j = 0;
  loop();
  console.log(sortNumber);
  comparisons = 0;
};

const draw = () => {
  background(0);
  if (sortNumber === 1) {
    bubbleSort(values, 1);
  }
  if (sortNumber === 2) {
    insertionSort(values, 1);
  }
  if (sortNumber === 3) {
    selectionSort(values, 1);
  }
  if (sortNumber === 4) {
    bubbleSort(values, 1);
  }

  simulateSorting(values);
};

const bubbleSort = (inArray: number[], speed: number) => {
  const arrayLength = inArray.length;
  for (let k = 0; k < speed; k++) {
    if (i < arrayLength) {
      for (j = 0; j < arrayLength - i - 1; j++) {
        let temp = inArray[j];
        if (inArray[j] > inArray[j + 1]) {
          inArray[j] = inArray[j + 1];
          inArray[j + 1] = temp;
          comparisons++;
        }
      }
    } else {
      noLoop();
      resetSort();
      i = 0;
      sortNumber = 2;
    }
    i++;
  }
};

const insertionSort = (inArray: number[], speed: number) => {
  const arrayLength = inArray.length;
  for (let k = 0; k < speed; k++) {
    if (i < arrayLength) {
      let temp = inArray[i];
      for (j = i; j > 0 && inArray[j - 1] > temp; j--) {
        inArray[j] = inArray[j - 1];
        comparisons++;
      }
      inArray[j] = temp;
    } else {
      noLoop();
      resetSort();
      sortNumber = 3;
      i = -1;
    }
    i++;
  }
};

const selectionSort = (inArray: number[], speed: number) => {
  const arrayLength = inArray.length;
  for (let k = 0; k < speed; k++) {
    if (i < arrayLength - 1) {
      for (let j = i + 1; j < arrayLength; j++) {
        comparisons++;
        if (inArray[i] > inArray[j]) {
          let temp = inArray[i];
          inArray[i] = inArray[j];
          inArray[j] = temp;
        }
      }
    } else {
      noLoop();
      resetSort();
      sortNumber = 1;
    }
    i++;
  }
};

const simulateSorting = (inArray: number[]) => {
  for (let k = 0; k < inArray.length; k++) {
    if (k == i) {
      fill("#ff00aa");
    } else if (k == j && j != 0) {
      fill("#FF001E");
    } else {
      stroke("#ff00aa");
      fill("#4a4edd");
    }

    rect(k * sizeMod, height, sizeMod, -inArray[k]);
  }
  fill("4a4edd");
  textSize(20);
  if (sortNumber === 1) {
    text("Bubble Sort", 20, 20);
  } else if (sortNumber === 2) {
    text("Insertion Sort", 20, 20);
  } else if (sortNumber === 3) {
    text("Selection Sort", 20, 20);
  }
  text("Sorted Lines: " + (i - 1) + "\nComparisons: " + comparisons, 20, 40);
};
