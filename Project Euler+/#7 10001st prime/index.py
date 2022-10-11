#!/bin/python3

import sys

def eratosthenes():
    mark = [0 for i in range(105000)]
    res = []
    for i in range(2, 105000):
        if (mark[i] != True):
            res.append(i)
            
            for j in range(i * 2, 105000, i):
                mark[j] = True
    
    return res

primes = eratosthenes()

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    
    print(primes[n - 1])