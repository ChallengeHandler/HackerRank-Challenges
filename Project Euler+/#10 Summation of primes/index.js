process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function eratosthenes() {
    const flag = {};
    const primes = [];
    for (let i = 2; i <= 1000000; i ++) {
        if (!flag[i]) {
            primes.push(i);
            
            if (i * i <= 1000000) {
                for (let j = i * 2; j <= 1000000; j += i) {
                    flag[j] = true;
                }
            }
        }
    }
    return primes;
}

function main() {
    var t = parseInt(readLine());
    
    const primes = eratosthenes();
    const sums = new Array(primes.length);
    sums[0] = primes[0];
    for (let i = 1; i < primes.length; i ++) {
        sums[i] = sums[i - 1] + primes[i];
    }
    
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        
        let low = 0, high = primes.length - 1;
        let idx = -1;
        while (low < high) {
            const mid = (low + high) >> 1;
            
            if (primes[mid] < n) {
                low = mid + 1;
            } else if (primes[mid] > n) {
                high = mid - 1;
            } else {
                idx = mid;
                break;
            }
        }
        if (idx === -1) {
            idx = low;
            if (primes[idx] > n) {
                idx --;
            }
        }
        
        console.log(sums[idx])
    }

}