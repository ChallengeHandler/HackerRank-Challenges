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



function main() {
    const t: number = parseInt(readLine().trim(), 10);
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

    for (let tItr: number = 0; tItr < t; tItr++) {
        const n: number = parseInt(readLine().trim(), 10);
        
        const factors: { [key: number]: number } = {};
        
        for (let i = 2; i <= n; i ++) {
            let t = i;
            for (let prime of primes) {
                if (t % prime === 0) {
                    let cnt = 0;
                    while (t % prime === 0) {
                        t /= prime;
                        cnt ++;
                    }
                    if (!factors[prime] || factors[prime] < cnt) {
                        factors[prime] = cnt;
                    }
                }
            }
        }
        
        let product = 1;
        Object.keys(factors)
            .map(Number)
            .forEach(prime => product *= Math.pow(prime, factors[prime]));
        
        console.log(product);
    }
}
