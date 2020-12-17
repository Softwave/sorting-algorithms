// Sorting algorithms

let values: number[] = [];
let i: number = 0;
let j: number = 0;
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
let comparisons = 0;
let sortNumber:number = 1; 
const setup = () => {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < width / 8; i++) {
    values.push(random(height));
  }
  console.log(values);
};

const resetSort = () => {
  values = [];
  for (let i = 0; i < width / 8; i++) {
    values.push(random(height));
  }
  i = 0;
  j = 0;
  loop();
  console.log(sortNumber);
}

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
  
  
  //resetSort();
  //insertionSort(values, 2);
  simulateSorting(values);
};


const bubbleSort = (inArray: number[], speed: number) => {
  for (let k = 0; k < speed; k++) {
    if (i < values.length) {
      for (j = 0; j < values.length - i - 1; j++) {
        let temp = inArray[j];
        if (inArray[j] > inArray[j + 1]) {
          inArray[j] = inArray[j + 1];
          inArray[j + 1] = temp;
        }
      }
    } else {
      noLoop();
      resetSort();
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
    } else if ((k == j && j != 0) {
      fill("#FF001E");
    } else {
      stroke("#ff00aa");
      fill("#4a4edd");
    }

    rect(k * 8, height, 8, -inArray[k]);
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
  //text("Sorted: " + (i - 1) +
  //    "\t|\tComparisons: " + comparisons, 20, 20);
};
