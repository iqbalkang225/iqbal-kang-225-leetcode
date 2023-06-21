const arr = [12, 3, 99, 34, 45, 1, 23, 64, 4, -54, 87, 22];

const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    let smallestIdx = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < smallest) {
        smallest = arr[j];
        smallestIdx = j;
      }
    }
    if (arr[i] > smallest) swap(arr, i, smallestIdx);
  }
  return arr;
};

// console.log(selectionSort(arr));
