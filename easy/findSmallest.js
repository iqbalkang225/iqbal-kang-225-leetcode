const arr = [12, 3, 99, 34, 45, 1, 23, 64, -3, -2, , -43, 4, 87, 22];

const findSmallest = (arr) => {
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];
  }
  return smallest;
};

// console.log(findSmallest(arr));
