var lengthOfLongestSubstring = function (s) {
  let windowStart = 0,
    maxLength = 0,
    charIdxMap = {};
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];
    if (rightChar in charIdxMap) {
      windowStart = Math.max(windowStart, charIdxMap[rightChar] + 1);
      console.log(windowStart);
    }
    charIdxMap[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
