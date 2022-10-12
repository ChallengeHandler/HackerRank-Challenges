# Largest product in a grid

## Problem

In the $20 \times 20$ grid below, four numbers along a diagonal line have been marked in bold.
$89 \space 90 \space 95 \space 97 \space 38 \space 15 \space 00 \space 40 \space 00 \space 75 \space 04 \space 05 \space 07 \space 78 \space 52 \space 12 \space 50 \space 77 \space 91 \space 08$
$49 \space 49 \space 99 \space 40 \space 17 \space 81 \space 18 \space 57 \space 60 \space 87 \space 17 \space 40 \space 98 \space 43 \space 69 \space 48 \space 04 \space 56 \space 62 \space 00$
$81 \space 49 \space 31 \space 73 \space 55 \space 79 \space 14 \space 29 \space 93 \space 71 \space 40 \space 67 \space 53 \space 88 \space 30 \space 03 \space 49 \space 13 \space 36 \space 65$
$52 \space 70 \space 95 \space 23 \space 04 \space 60 \space 11 \space 42 \space 69 \space 24 \space 68 \space 56 \space 01 \space 32 \space 56 \space 71 \space 37 \space 02 \space 36 \space 91$
$22 \space 31 \space 16 \space 71 \space 51 \space 67 \space 63 \space 89 \space 41 \space 92 \space 36 \space 54 \space 22 \space 40 \space 40 \space 28 \space 66 \space 33 \space 13 \space 80$
$24 \space 47 \space 32 \space 60 \space 99 \space 03 \space 45 \space 02 \space 44 \space 75 \space 33 \space 53 \space 78 \space 36 \space 84 \space 20 \space 35 \space 17 \space 12 \space 50$
$32 \space 98 \space 81 \space 28 \space 64 \space 23 \space 67 \space 10 \space 26 \space 38 \space 40 \space 67 \space 59 \space 54 \space 70 \space 66 \space 18 \space 38 \space 64 \space 70$
$67 \space 26 \space 20 \space 68 \space 02 \space 62 \space 12 \space 20 \space 95 \space 63 \space 94 \space 39 \space 63 \space 08 \space 40 \space 91 \space 66 \space 49 \space 94 \space 21$
$24 \space 55 \space 58 \space 05 \space 66 \space 73 \space 99 \space 26 \space 97 \space 17 \space 78 \space 78 \space 96 \space 83 \space 14 \space 88 \space 34 \space 89 \space 63 \space 72$
$21 \space 36 \space 23 \space 09 \space 75 \space 00 \space 76 \space 44 \space 20 \space 45 \space 35 \space 14 \space 00 \space 61 \space 33 \space 97 \space 34 \space 31 \space 33 \space 95$
$78 \space 17 \space 53 \space 28 \space 22 \space 75 \space 31 \space 67 \space 15 \space 94 \space 03 \space 80 \space 04 \space 62 \space 16 \space 14 \space 09 \space 53 \space 56 \space 92$
$16 \space 39 \space 05 \space 42 \space 96 \space 35 \space 31 \space 47 \space 55 \space 58 \space 88 \space 24 \space 00 \space 17 \space 54 \space 24 \space 36 \space 29 \space 85 \space 57$
$86 \space 56 \space 00 \space 48 \space 35 \space 71 \space 89 \space 07 \space 05 \space 44 \space 44 \space 37 \space 44 \space 60 \space 21 \space 58 \space 51 \space 54 \space 17 \space 58$
$19 \space 80 \space 81 \space 68 \space 05 \space 94 \space 47 \space 69 \space 28 \space 73 \space 92 \space 13 \space 86 \space 52 \space 17 \space 77 \space 04 \space 89 \space 55 \space 40$
$04 \space 52 \space 08 \space 83 \space 97 \space 35 \space 99 \space 16 \space 07 \space 97 \space 57 \space 32 \space 16 \space 26 \space 26 \space 79 \space 33 \space 27 \space 98 \space 66$
$88 \space 36 \space 68 \space 87 \space 57 \space 62 \space 20 \space 72 \space 03 \space 46 \space 33 \space 67 \space 46 \space 55 \space 12 \space 32 \space 63 \space 93 \space 53 \space 69$
$04 \space 42 \space 16 \space 73 \space 38 \space 25 \space 39 \space 11 \space 24 \space 94 \space 72 \space 18 \space 08 \space 46 \space 29 \space 32 \space 40 \space 62 \space 76 \space 36$
$20 \space 69 \space 36 \space 41 \space 72 \space 30 \space 23 \space 88 \space 34 \space 62 \space 99 \space 69 \space 82 \space 67 \space 59 \space 85 \space 74 \space 04 \space 36 \space 16$
$20 \space 73 \space 35 \space 29 \space 78 \space 31 \space 90 \space 01 \space 74 \space 31 \space 49 \space 71 \space 48 \space 86 \space 81 \space 16 \space 23 \space 57 \space 05 \space 54$
$01 \space 70 \space 54 \space 71 \space 83 \space 51 \space 54 \space 69 \space 16 \space 92 \space 33 \space 48 \space 61 \space 43 \space 52 \space 01 \space 89 \space 19 \space 67 \space 48$

The product of these numbers is $26 \times 63 \times 78 \times 14 = 1788696$.

What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the $20 \times 20$ grid?

**Input format**

Input consists of $20$ lines each containing $20$ integers

**Constraints**

- $0 \leq Each \space integer \space in \space the \space grid \leq 100$

**Output Format**

Print the required answer.

**Sample Input**
```
89 90 95 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50
32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70
67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21
24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72
21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48
```

**Sample Output**
```
73812150
```

**Explanation**

Try all possible ways and check the result.