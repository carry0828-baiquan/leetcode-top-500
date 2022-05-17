var snakesAndLadders = function (board) {
  let n = board.length;
  let seen = new Set();
  let queue = [[1, 0]];

  while (queue.length) {
    let [label, step] = queue.shift();
    console.log(label, step);
    let [r, c] = labelToPosition(label, n);
    console.log(r, c, n);
    if (board[r][c] !== -1) {
      label = board[r][c];
    }
    if (label == n * n) {
      return step;
    }

    for (let x = 1; x < 7; x++) {
      let nextLabel = label + x;
      if (nextLabel <= n * n && !seen.has(nextLabel)) {
        seen.add(nextLabel);
        queue.push([nextLabel, step + 1]);
      }
    }
  }
  return -1;
};

const labelToPosition = (label, n) => {
  let row = Math.floor((label - 1) / n);
  let col = (label - 1) % n;
  console.log("label", row, col);
  if (row % 2 === 0) {
    return [n - 1 - row, col];
  } else {
    return [n - 1 - row, n - 1 - col];
  }
};

console.log(
  snakesAndLadders([
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ])
);

function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}

function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

console.log(mergesort([1, 2, 3, 5, 4, 6, 7, 8, 9, 10]));
console.log(quicksort([3, 2, 1, 4, 5, 6]));

function SearchingChallenge(str) {
  let arr = str.split(" ");
  let maxVal = 0;
  let maxValMap = new Map();
  let charMap = new Map();
  for (let string of arr) {
    for (let i = 0; i < string.length; i++) {
      if (charMap.has(string[i])) {
        charMap.set(string[i], charMap.get(string[i]) + 1);
      } else {
        charMap.set(string[i], 1);
      }
    }

    let mapSorted = new Map([...charMap.entries()].sort((a, b) => b[1] - a[1]));
    charMap.clear();
    let [firstKey] = mapSorted.keys();
    console.log(mapSorted);
    maxVal = Math.max(maxVal, mapSorted.get(firstKey));
    maxValMap.set(string, mapSorted.get(firstKey));
    console.log(maxValMap);
  }

  for (let [key, value] of maxValMap) {
    if (value === maxVal) {
      console.log(key);
      return checkToken(key, token);
    }
  }
}

function checkToken(str, token) {
  for (let char of str) {
    for (let char2 of token) {
      if (char === char2) {
        str[char] = "";
      }
    }
  }
  return str;
}

SearchingChallenge("hello apple pie");
