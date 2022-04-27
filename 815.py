import collections
def numBusesToDestination(self, routes, source: int, target: int) -> int:
    to_routes = collections.defaultdict(set)
    for i, route in enumerate(routes):
        for j in route:
            to_routes[j].add(route)
    bfs = [(source, 0)]
    visited = set()

    
    while bfs:
        cur, step = bfs.pop(0)
        if cur == target:
            return step
        visited.add(cur)
        for route in to_routes[cur]:
            for j in route:
                if j not in visited:
                    bfs.append((j, step + 1))
                    visited.add(j)
            routes[route] = []
    
    return -1

print(numBusesToDestination([[1,2,7],[3,6,7]], 1, 19))

