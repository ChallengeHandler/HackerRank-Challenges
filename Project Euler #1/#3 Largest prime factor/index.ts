'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function eratosthenes(limit: number): number[] {
    const primes: number[] = [];
    const flag = new Array(limit + 1).fill(false);
    
    let i;
    for (i = 2; i * i <= limit; i ++) {
        if (!flag[i]) {
            primes.push(i);
            for (let j = i * 2; j <= limit; j += i) {
                flag[j] = true;
            }
        }
    }
    for (; i <= limit; i ++) {
        if (!flag[i]) {
            primes.push(i);
        }
    }
    
    return primes;
}

function main() {
    const primes = eratosthenes(1000000);
    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const n: number = parseInt(readLine().trim(), 10);
        
        let res = 0;
        let temp = n;
        for (let prime of primes) {
            if (temp % prime === 0)  {
                while (temp % prime === 0) {
                    temp /= prime;
                }
                res = prime;
            }
            if (prime > n) {
                break;
            }
        }
        if (temp > res) {
            res = temp;
        }
        
        console.log(res);
    }
}
