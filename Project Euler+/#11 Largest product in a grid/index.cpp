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


int main(){
    vector< vector<int> > grid(20,vector<int>(20));
    for(int grid_i = 0;grid_i < 20;grid_i++){
    	for(int grid_j = 0;grid_j < 20;grid_j++){
    		cin >> grid[grid_i][grid_j];
    	}
    }
    
    int res = 0, i, j, k, p;
    for (i = 0; i < 20; i ++) {
        for (j = 0; j < 20; j ++) {
            if (i <= 16) {
                for (k = 0, p = 1; k < 4; k ++) {
                    p *= grid[i + k][j];
                }
                res = res > p ? res : p;
            }
            if (j <= 16) {
                for (k = 0, p = 1; k < 4; k ++) {
                    p *= grid[i][j + k];
                }
                res = res > p ? res : p;
            }
            if (i <= 16 && j <= 16) {
                for (k = 0, p = 1; k < 4; k ++) {
                    p *= grid[i + k][j + k];
                }
                res = res > p ? res : p;
            }
            if (i <= 16 && j >= 3) {
                for (k = 0, p = 1; k < 4; k ++) {
                    p *= grid[i + k][j - k];
                }
                res = res > p ? res : p;
            }
        }
    }
    
    cout << res << endl;
    return 0;
}