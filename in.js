function sortCharsByFreq(str) {
  // build the freq map of the str
  //tree

  let res = [];
  let map = {};
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }

  console.log(map);
  let newMap = Object.entries(map).sort((a, b) => b[1] - a[1]);
  console.log(newMap);
  // loop through the map and push the keys to the res
  for (let [key, value] of newMap) {
    for (let i = 0; i < value; i++) {
      res.push(key);
    }
  }
  return res.join("");
}

console.log(sortCharsByFreq("tree"));

//fetch from mock api
//https://mock-api.com/v1/3c1f8c3c/mock/5e8f8f8f/api/
