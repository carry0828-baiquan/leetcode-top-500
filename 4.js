var findMedianSortedArrays = function (nums1, nums2) {
  let ans = nums1.concat(nums2);
  ans.sort((a, b) => a - b);
  if (ans.length % 2 === 0) {
    return (ans[ans.length / 2] + ans[ans.length / 2 - 1]) / 2;
  } else {
    return ans[Math.floor(ans.length / 2)];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
