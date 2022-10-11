# Largest product in a series

## Problem

Find the greatest product of $K$ consecutive digits in the $N$ digit number.

**Input format**

First line contains $T$ that denotes the number of test cases.<br/>
First line of each test case will contain two integers $N$ & $K$.<br/>
Second line of each test case will contain a $N$ digit integer.

**Constraints**

- $1 \leq T \leq 100$
- $1 \leq K \leq 7$
- $K \leq N \leq 1000$

**Output Format**

Print the required answer for each test case.

**Sample Input 0**
```
2
10 5
3675356291
10 5
2709360626
```

**Sample Output 0**
```
3150
0
```

**Explanation 0**

- For $3675356291$ and selecting $K = 5$ consequetive digits, we have $36753, 67535, 75356, 53562, 35629$ and $56291$. Where $6 \times 7 \times 5 \times 3 \times 5$ gives maximum product as $3150$
- For $2709360626$, $0$ lies in all selection of $5$ consequetive digits hence maximum product remains $0$