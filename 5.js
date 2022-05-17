// two ptrs and compare
var longestPalindrome = function (s) {
  let longest = 0;
  let longestStr = "";
  for (let i = 0; i < s.length; i++) {
    let str = s[i];
    for (let j = i + 1; j < s.length; j++) {
      str += s[j];
      if (str.length > longest) {
        if (isPalindrome(str)) {
          longest = str.length;
          longestStr = str;
        }
      }
    }
  }
  return longestStr;
};

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(longestPalindrome("babad"));
