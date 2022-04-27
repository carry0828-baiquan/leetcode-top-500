/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.prefixSums = [];
  this.totalSum = 0;
  let prefixSum = 0;
  for (let i = 0; i < w.length; i++) {
    prefixSum += w[i];
    this.prefixSums.push(prefixSum);
  }
  this.totalSum = prefixSum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let target = this.totalSum * Math.random();
  let left = 0;
  let right = this.prefixSums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (this.prefixSums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
