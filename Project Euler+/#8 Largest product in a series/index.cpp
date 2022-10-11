#include <map>
#include <set>
#include <list>
#include <cmath>
#include <ctime>
#include <deque>
#include <queue>
#include <stack>
#include <string>
#include <bitset>
#include <cstdio>
#include <limits>
#include <vector>
#include <climits>
#include <cstring>
#include <cstdlib>
#include <fstream>
#include <numeric>
#include <sstream>
#include <iostream>
#include <algorithm>
#include <unordered_map>

using namespace std;

int mul(const string& num, int idx, int cnt) {
    int p = 1;
    for (int i = idx, c = 0; c < cnt; i ++, c ++) {
        p *= num[i] - '0';
    }
    return p;
}

int main(){
    int t;
    cin >> t;
    for(int a0 = 0; a0 < t; a0++){
        int n;
        int k;
        cin >> n >> k;
        string num;
        cin >> num;
        
        int i, p;
        p = mul(num, 0, k);
        int res = p;
        for (i = k; num[i]; i ++) {
            int popDigit = num[i - k] - '0';
            int pushDigit = num[i] - '0';
            if (popDigit) {
                p = p * pushDigit / popDigit;
            } else {
                p = mul(num, i - k + 1, k);
            }
            res = res > p ? res : p;
        }
        cout << res << endl;
    }
    return 0;
}