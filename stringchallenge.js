function stringChallenge(num) {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  let res = `${hours}:${minutes}`;
  return checkToken(res, token);
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

console.log(stringChallenge(40));
console.log(stringChallenge(120));
