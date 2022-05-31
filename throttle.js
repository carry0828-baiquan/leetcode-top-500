function throttle(func, wait) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
}

//implement a debounce function

function debounce(func, wait) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

//implement json stringify
function stringify(obj) {}

//Convert all keys within an object into snake_case/camelCase
function convertKeys(obj) {
  let newObj = {};
  for (let key in obj) {
    let newKey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
    newObj[newKey] = obj[key];
  }
  return newObj;
}

//js deep clone
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

//output the item and its value within 6 hours

function outputItem(item) {
  let date = new Date();
  date.setHours(date.getHours() + 6);
  document.cookie = `${item}=${item};expires=${date.toUTCString()}`;
}

let item = {
  name: "John",
  age: 30,
  item: 23,
};

console.log(outputItem(item));
