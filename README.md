# Leetcode-75
leet code 75

## 2. gcd_of_strings

string1, string2의 길이의 GCD를 n이라고 합시다.
그렇다면 gcd of strings의 길이가 n임을 밝혀야 합니다.
1. n보다 클 수는 없습니다. -> 길이가 n보다 길면서 두 string을 모두 분할할 수 있는 string은 GCD의 정의상 없습니다.
2. n보다 작을 수는 있습니다. n의 약수에 대해서 성립할 수는 있습니다. 하지만 n보다 작다면 답이되는 substring역시 "ABAB"처럼 반복된다는 의미이고, 우리는 두 string을 모두 분할할 수 있는 최대 크기를 구해야 하므로, "AB"가 아닌 "ABAB"를 찾아야 합니다.
3. n이 답이 아니라면, n보다 작은 수도 답이될 수 없습니다. "ABCABC"가 답이 아니라면, 두 문자열중에 "ABCABC"가 반복되지 않는 구간이 있다는 뜻이고, 그렇다면 "ABC"역시 반복되지 않습니다.
4. 따라서 답은 (존재한다면) 반드시 길이가 n이므로, 두 string의 길이의 GCD에 대해서 반복 여부만 파악하면 됩니다.


하지만 길이가 n인 부분문자열이라고 모두 정답은 아닙니다. 길이가 6,  4인 두 문자열의 길이의 gcd는 2이지만, "ABCDEF", "WERW" 처럼 전혀 반복되지 않는다면 답이 될 수 없습니다. 따라서 각 문자열의 부분문자열이 GCD문자열 (위의 경우에는 "AB" 혹은 "WE") 로만 이루어져 있는지 확인하면 됩니다.


## 3. kids_with_candies

candies 배열을 돌며 최대값을 구하고 max값을 저장해둡니다.
이후 candies 배열의 각 원소를 돌며
candies[i] + extraCandies 가 max보다 크거나 같으면 true, 작으면 false를 추가하고 return 합니다.