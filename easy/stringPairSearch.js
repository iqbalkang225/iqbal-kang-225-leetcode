const string = 'MoldedOldGoldWasSoldAfterItWasOnHold';
const strPair = 'old';
let totalPair = 0;

const findPair = (string) => {
  const str = string.toLowerCase();
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === strPair[counter] && counter <= strPair.length) {
      counter++;

      if (counter === strPair.length) {
        totalPair++;
        counter = 0;
      }
    } else counter = 0;
  }
  return totalPair;
};

// console.log(findPair(string));
