#include <bits/stdc++.h>
using namespace std;
int main()
{
    long long int t;
    cin >> t;
    while (t--)
    {
        long int n;
        cin >> n;
        string s;
        cin >> s;
        long long int k = 0;
        char a[s.length() / n][n];
        int row = s.length() / n;
        for (int i = 0; i < row; i++)
        {
            for (int j = 0; j < n; j++)
            {

                a[i][j] = s[k];
                k++;
            }
        }

        for (int i = 0; i < n; i++)
            for (int j = 0; j < row; j++)
            {
                if (i == n - 1)
                {
                    if (j > 0)
                    {
                        if (a[j][i] == 'a')
                        {
                            int k = j + 1;
                            while (k < row)
                            {
                                if (a[k][j] != 'a')
                                    break;
                                k++;
                            }

                            if (k == row)
                                break;
                        }
                    }
                }
                    cout << a[j][i];
                }
            
        cout << endl;
    }
}
