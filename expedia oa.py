def maxDiff(arr, arr_size):
    max_diff = arr[1] - arr[0]
    min_element = arr[0]
     
    for i in range( 1, arr_size ):
        if (arr[i] - min_element > max_diff):
            max_diff = arr[i] - min_element
     
        if (arr[i] < min_element):
            min_element = arr[i]
    print(max_diff)
    return max_diff


maxDiff([7,1,2,5], 4)

print("a")
a = [1,2,4]

import collections 
def maxNumberOfFamilies(n, reservedSeats):
    reserved = reservedSeats.split(" ")
    temp = []
    for seat in reserved:
        temp.append([seat[0], seat[1]])
    print(reserved, temp)
    seats = collections.defaultdict(set)

    for i,j in temp:
        if j in ['B', 'C', 'D', 'E']:
            seats[i].add(0)
        if j in ['D', 'E', 'F', 'G']:
            seats[i].add(1)
        if j in ['F', 'G', 'H', 'J']:
            seats[i].add(2)
    res = 2*n
    for i in seats:
        if len(seats[i]) == 3:
            res -= 2
        else:
            res -= 1
    print(res)
    return res


maxNumberOfFamilies(2, "1A 2F 1C")

