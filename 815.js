var numBusesToDestination = function (routes, source, target) {
  let to_routes = {};
  routes.forEach((route) => {
    route.forEach((stop) => {
      if (!to_routes[stop]) {
        to_routes[stop] = [];
      }
      to_routes[stop].push(route);
    });
  });

  let bfs = [[source, 0]];
  let visited = new Set([source]);
  for ([stop, bus] of bfs) {
    if (stop === target) {
      return bus;
    }
    for (let route of to_routes[stop]) {
      for (let nextStop of route) {
        if (!visited.has(nextStop)) {
          bfs.push([nextStop, bus + 1]);
          visited.add(nextStop);
        }
      }
      routes[route] = [];
    }
  }
  return -1;
};

console.log(
  numBusesToDestination(
    [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]],
    15,
    12
  )
);
