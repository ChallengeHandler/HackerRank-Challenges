#!/bin/python3

import sys

def sumOfSquare(n):
    return n * (n + 1) * (2 * n + 1) / 6;

def squareOfSum(n):
    sum = n * (n + 1) / 2;
    return sum * sum;

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    
    print(f'{abs(sumOfSquare(n) - squareOfSum(n)):0.0f}')