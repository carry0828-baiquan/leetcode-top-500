var maximumPopulation = function (logs) {
  let birthYears = [],
    maxYear,
    maxPopu = 0;
  for (let log of logs) {
    birthYears.push(log[0]);
  }
  birthYears.sort();
  console.log(birthYears);
  for (let year of birthYears) {
    let people = 0;
    for (let log of logs) {
      if (log[0] <= year && log[1] > year) {
        people++;
      }
    }
    if (people > maxPopu) {
      maxYear = year;
      maxPopu = people;
    }
  }
  console.log(maxYear);
  return maxYear;
};
maximumPopulation([
  [1993, 1999],
  [2000, 2010],
]);
