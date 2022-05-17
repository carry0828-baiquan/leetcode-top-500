function slotwheels(history) {
  let rows = [],
    grid = [],
    max = 0,
    finalSum = 0;
  for (let row of history) {
    let rowNums = row.split("");
    for (let i = 0; i < rowNums.length; i++) {
      rowNums[i] = parseInt(rowNums[i]);
    }
    rows.push(...rowNums);
    grid.push(rows);
    rows = [];
  }
  console.log(grid);
  while (grid[0].length > 0) {
    max = findMaxInGrid(grid);
    finalSum += max;
    grid.forEach((row) => {
      let rowMax = findMaxInRow(row);
      row.splice(row.indexOf(rowMax), 1);
    });
  }
  console.log(finalSum);
  return finalSum;
}

function findMaxInGrid(grid) {
  let max = 0;
  for (let row of grid) {
    for (let num of row) {
      if (num > max) {
        max = num;
      }
    }
  }
  return max;
}

function findMaxInRow(row) {
  let max = 0;
  for (let num of row) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

slotwheels(["712", "246", "365", "312"]);

function emojify(emoji, message) {
  let emojiArr = emoji.split("");
  let messageArr = message.split("");
  let emojiIndex = 0;
  for (let i = 0; i < messageArr.length; i++) {
    if (messageArr[i] === " ") {
      messageArr[i] = emojiArr[emojiIndex];
      emojiIndex++;
    }
  }
  if (emojiArr === emoji.split("")) {
    return "invalid string";
  }
  if (emojiArr !== emoji.split("")) {
    return messageArr.join("");
  }
  return "invalid";
}
