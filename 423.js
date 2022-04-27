var originalDigits = function (s) {
  let ans = "";
  let map = new Map();
  let array = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      let count = map.get(s.charAt(i)) + 1;
      map.set(s.charAt(i), count);
    } else {
      map.set(s.charAt(i), 1);
    }
  }

  array[0] = get(map, "z");
  array[2] = get(map, "w");
  array[3] = Math.abs(get(map, "g") - get(map, "h"));
  array[4] = get(map, "u");
  array[5] = get(map, "f") - get(map, "u");
  array[6] = get(map, "x");
  array[7] = Math.abs(get(map, "s") - get(map, "x"));
  array[8] = get(map, "g");
  array[9] = Math.abs(get(map, "i") - array[5] - array[6] - array[8]);
  array[1] = Math.abs(
    get(map, "o") - get(map, "z") - get(map, "w") - get(map, "u")
  );

  for (let i = 0; i < array.length; i++) {
    ans = ans + i.toString().repeat(array[i]);
  }
  return ans;
};

const get = (map, text) => {
  if (map.has(text)) {
    return map.get(text);
  } else {
    return 0;
  }
};

console.log(originalDigits("owoztneoer"));
