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

function checkPalindrome(n: number): boolean {
    return String(n) === String(n).split('').reverse().join('');
}

function binarySearch(list: number[], val: number): number {
    let st: number = 0;
    let en: number = list.length - 1;
    while(st < en) {
        let mid = (st + en) >> 1;
        if (list[mid] === val) {
            return mid;
        }
        if (list[mid] > val) {
            en = mid - 1;
        }
        if (list[mid] < val) {
            st = mid + 1;
        }
    }
    return st;
}

function getPalindromes(): number[] {
    const container: { [key: number]: boolean } = {};
    
    for (let i = 100; i < 1000; i ++) {
        for (let j = i; j < 1000; j ++) {
            const product = i * j;
            if (product > 1e5 && checkPalindrome(product)) {
                container[product] = true;
            }
        }
    }
    
    return Object.keys(container).map(key => Number(key)).sort((a, b) => a - b);
}

function main() {
    const t: number = parseInt(readLine().trim(), 10);
    const palindromes = getPalindromes();

    for (let tItr: number = 0; tItr < t; tItr++) {
        const n: number = parseInt(readLine().trim(), 10);
        
        const idx = binarySearch(palindromes, n);
        const res = palindromes[idx] < n ? palindromes[idx] : palindromes[idx - 1];
        
        console.log(res);
    }
}
