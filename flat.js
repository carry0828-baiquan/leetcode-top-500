function flat(arr, depth) {
  if (depth === 0) {
    return arr;
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flat(arr[i], depth - 1));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(flat([1, 2, [3, 4, [5, 6]], 7, 8], 2));
