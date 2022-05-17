var findtagretString = (target, str) => {
  let left = 0,
    right = 0,
    count = 0;
  while (right < str.length && left < target.length) {
    if (str[right] === target[left]) {
      right++;
      left++;
    } else {
      right++;
    }
    if (left === target.length - 1) {
      count++;
      left = 0;
    }
  }
  return count;
};

console.log(findtagretString("cbc", "abcbccbcawe"));
