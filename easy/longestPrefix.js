// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

//! Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

//! Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (arr) {
  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

// console.log(longestCommonPrefix(['flower', 'aaflow', 'flight']));
