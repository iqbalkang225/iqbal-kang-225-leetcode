var isPalindrome = function (x) {
  let str1 = '';
  let str2 = '';

  const intStr = x.toString();
  for (let char of intStr) {
    str1 += char;
  }

  for (let i = intStr.length - 1; i >= 0; i--) {
    str2 += intStr[i];
  }

  if (str1 === str2) return true;
  else return false;
};

// console.log(isPalindrome(1));
