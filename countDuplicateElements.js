function countDuplicate(arr) {
  var obj = {};
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  for (var key in obj) {
    if (obj[key] > 1) {
      result.push(key);
    }
  }

  return result.length;
}

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    });
  })(i);
}
