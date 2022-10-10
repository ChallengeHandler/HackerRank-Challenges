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

__int64_t Sum(int nStart, int nEnd, int nStep) {
    if (nStart > nEnd) {
        return 0;
    }
    return (__int64_t)(nStart + nEnd) * ((nEnd - nStart) / nStep + 1) / 2;
}

int main(){
    int t;
    cin >> t;
    for(int a0 = 0; a0 < t; a0++){
        int n;
        cin >> n;
        
        printf("%ld\n", Sum(3, (n - 1)/3*3, 3) + Sum(5, (n - 1)/5*5, 5) - Sum(15, (n - 1)/15*15, 15));
    }
    return 0;
}