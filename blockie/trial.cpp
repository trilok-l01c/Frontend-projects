#include <bits/stdc++.h>
using namespace std;

int main() {
	// your code goes here
    int n, k;
    cin >> n >> k;
    int a = INT_MAX, p = INT_MAX;
    for(int i = 0; i < n; i++){
        int j;
        cin >> j;
        // if the abs diff is smallest 
        if(abs(j - k) <= a){
            a = abs(j - k);
            p = j;
        }else if(abs(j - k) == a && j < p)p = j;
    }
    cout << p << endl;
}
