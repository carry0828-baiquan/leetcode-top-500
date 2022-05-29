##change [‘a.b.c’, 'd.e.f'] to {a:{b:{c:''}}, d:{e:{f:''}}}


def change(l):
    d = {}
    for i in range(len(l)):
        name_arr = l[i].split('.')
        curr = d
        for j in range(len(name_arr)):
            if j == len(name_arr) - 1:
                curr[name_arr[j]] = ''
            else:
                if name_arr[j] not in curr:
                    curr[name_arr[j]] = {}
                curr = curr[name_arr[j]]
    return d
print(change(['a.b.c','d.e.f']))
dict = {"1" :3, "2" :2, "3" :1}
print(sorted(dict.items(), key=lambda x: x[1],reverse=True) )
cache = []


 
def filter_message(time, message):
    for t, m in cache:
        if message == m:
            if t in range(time - 10, time):
                t = time
                return 
    cache.append((time, message))
    print(time, message)
filter_message(1, "a")



