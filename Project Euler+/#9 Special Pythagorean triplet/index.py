#!/bin/python3

import sys

def func(n):
    for i in range(n//3, 0, -1):
        powi = i * i
        low = i + 1
        high = (n - i)//2
        while(low <= high):
            mid = (low + high)//2
            k = n - i - mid
            left = powi + mid * mid
            right = k * k
            if left < right:
                low = mid + 1
            elif left > right:
                high = mid - 1
            else:
                return i * mid * k
    return -1

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    
    print(func(n))
