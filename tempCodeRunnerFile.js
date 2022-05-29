  let newMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    console.log(newMap);