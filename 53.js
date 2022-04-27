var maxSubArray = function (nums) {
  let currSubArray = nums[0],
    maxSubArray = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currSubArray = Math.max(nums[i], currSubArray + nums[i]);
    maxSubArray = Math.max(maxSubArray, currSubArray);
  }
  return maxSubArray;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
