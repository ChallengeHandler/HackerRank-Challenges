#include <iostream>
#define MX 50000

using namespace std;

void Eratosthenes(int *primes) {
    int flag[MX] = {0};
    for (int i = 2; i < MX; i ++) if (!flag[i]) {
        *(primes ++) = i;
        for (int j = i * 2; j < MX; j += i) {
            flag[j] = 1;
        }
    }
}

int Count_Factor(int n, int *primes) {
    int res = 1;
    while (*primes * *primes <= n) {
        int p = 1;
        while (n % *primes == 0) {
            n /= *primes;
            p ++;
        }
        res *= p;
        primes ++;
    }
    if (n > 1) {
        res *= 2;
    }
    return res;
}

int main() {
    int t;
    int primes[10000];
    cin >> t;
    Eratosthenes(primes);
    while (t --) {
        int n;
        cin >> n;
        
        int k = 0;
        int res;
        while (true) {
            int a = Count_Factor(k, primes);
            int b = Count_Factor(2 * k + 1, primes);
            int c = Count_Factor(k + 1, primes);
            if (a * b > n) {
                res = k * (2 * k + 1);
                break;
            }
            if (b * c > n) {
                res = (k + 1) * (2 * k + 1);
                break;
            }
            k ++;
        }
        
        cout << res << endl;
    }
    return 0;
}