const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const numRequired = 13;

const binarySearch = (arr) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

  while (arr[middlePointer] !== numRequired && leftPointer <= rightPointer) {
    if (numRequired < arr[middlePointer]) rightPointer = middlePointer - 1;
    else leftPointer = middlePointer + 1;

    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  }

  return arr[middlePointer] === numRequired ? middlePointer : -1;
};

// console.log(binarySearch(arr));
