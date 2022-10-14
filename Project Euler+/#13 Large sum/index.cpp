#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;
    int sum[55] = {0};
    int num[55] = {0};
    cin >> n;
    
    while (n --) {
        char numStr[51];
        cin >> numStr;
        for (int i = 0; i < 50; i ++) {
            num[i] = numStr[49 - i] - '0';
        }
        int op = 0;
        for (int i = 0; i < 55; i ++) {
            int s = sum[i] + num[i] + op;
            op = s / 10;
            sum[i] = s % 10;
        }
    }
    
    int idx = 54;
    while (sum[idx] == 0) {
        idx --;
    }
    for (int i = 0; i < 10; i ++) {
        cout << sum[idx --];
    }
    cout << endl;
    return 0;
}
