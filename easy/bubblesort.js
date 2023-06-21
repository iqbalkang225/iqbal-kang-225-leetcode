const arr = [12, 3, 99, 34, 45, 1, 23, 64, 4, 87, 22];

const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

const bubbleSort = (arr) => {
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
};

// console.log(bubbleSort(arr));
