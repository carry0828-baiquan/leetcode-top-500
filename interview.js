// const maximalNetworkRank = (n, roads) => {
//   let connected = Array.from(Array(n), () => new Array(n));
//   let cnts = new Array(n).fill(0);
//   for (let r of roads) {
//     cnts[r[0]]++;
//     cnts[r[1]]++;
//     connected[r[0][r[1]]] = true;
//     connected[r[1][r[0]]] = true;
//   }

//   let res = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       res = Math.max(res, cnts[i] + cnts[j] - (connected[i][j] ? 1 : 0));
//     }
//   }
//   return res;
// };

// console.log(
//   maximalNetworkRank(8, [
//     [0, 1],
//     [1, 2],
//     [2, 3],
//     [2, 4],
//     [5, 6],
//     [5, 7],
//   ])
// );

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(new Date(), i);
//   }, 3000);
// }

// console.log(new Date(), i);

// const sleep = (timeountMS) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, timeountMS);
//   });

// (async () => {
//   // 声明即执行的 async 函数表达式
//   for (var i = 0; i < 5; i++) {
//     await sleep(1000);
//     console.log(new Date(), i);
//   }

//   await sleep(1000);
//   console.log(new Date(), i);
// })();

// function flat(arr, depth = 1) {
//   let result = [];
//   arr.forEach((item) => {
//     if (Array.isArray(item) && depth > 0) {
//       result.push(...flat(item, depth - 1));
//     } else result.push(item);
//   });
//   console.log(result);
//   return result;
// }

// flat([1, 2, [3, 4, [5, 6]]]);

// function shuffle(arr) {
//   let result = [];
//   while (arr.length) {
//     let index = Math.floor(Math.random() * arr.length);
//     result.push(arr[index]);
//     arr.splice(index, 1);
//   }
//   console.log(result);
//   return result;
// }

// shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// function emojify(message, emoji) {
//   if (
//     !isEmpty(message) ||
//     typeof message === "number" ||
//     typeof message === "boolean" ||
//     typeof message === "object"
//   ) {
//     return "invalid string";
//   }
//   let messageArr = String(message).split("");
//   for (let i = 0; i < messageArr.length; i++) {
//     if (messageArr[i] === " ") {
//       messageArr[i] = emoji;
//     }
//   }
//   //console.log(messageArr);

//   console.log(messageArr);
//   return messageArr.join("");
// }

// function isEmpty(message) {
//   let count = 0;
//   for (let i = 0; i < message.length; i++) {
//     if (message[i] === " ") {
//       count++;
//     }
//   }
//   if (count !== 0) {
//     return true;
//   }
//   return false;
// }

// emojify(" some blank spaces", "😀");

// function lrucache() {
//   let cache = {};
//   let cacheSize = 0;
//   let cacheLimit = 10;
//   return {
//     set: function (key, value) {
//       if (cacheSize >= cacheLimit) {
//         let keyToDelete = Object.keys(cache)[0];
//         delete cache[keyToDelete];
//         cacheSize--;
//       }
//       cache[key] = value;
//       cacheSize++;
//     },
//     get: function (key) {
//       return cache[key];
//     },
//   };
// }

// const serialize = (inputs) => {
//   const parents = new Set();
//   const all_items = {};
//   for (let input of inputs) {
//     nameArr = input.name.split(".");
//     const len = nameArr.length;
//     all_items[nameArr[len - 1]] = input.value;
//     for (let i = len - 2; i >= 0; i--) {
//       if (!(nameArr[i] in all_items)) {
//         all_items[nameArr[i]] = {};
//       }
//       all_items[nameArr[i]][nameArr[i + 1]] = all_items[nameArr[i + 1]];
//     }
//     parents.add(nameArr[0]); //put root into parent set
//   }
//   const result = {};
//   for (let parent of parents) {
//     result[parent] = all_items[parent];
//   }
//   return result;
// };
// console.log(
//   serialize([
//     { name: "foo.bar.baz", value: "a" },
//     { name: "foo.bar.biz", value: "a" },
//   ])
// );

// //change [‘a.b.c’, 'd.e.f'] to {a:{b:{c:''}}, d:{e:{f:''}}}
// function change(arr) {
//   let result = {};
//   for (let i = 0; i < arr.length; i++) {
//     let nameArr = arr[i].split(".");
//     let curr = result;
//     for (let j = 0; j < nameArr.length; j++) {
//       if (j === nameArr.length - 1) {
//         curr[nameArr[j]] = "";
//       } else {
//         if (!(nameArr[j] in curr)) {
//           curr[nameArr[j]] = {};
//         }
//         curr = curr[nameArr[j]];
//       }
//     }
//   }
//   return result;
// }
// console.log(change(["a.b.c", "d.e.f"]));

//The goal is to have a tree structure where each object(section) contains all its subsections going from 4 to 4.1 > 4.1.1 > 4.1.1.1.
 function tree(arr) {
   