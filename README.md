# Leetcode-75
leet code 75


## reverse_words_in_a_string

1. 정규표현식을 이용하여 whitespace를 기준으로 문자열 내의 단어들을 분리하고 배열에 저장한다.
2. 해당 배열을 뒤집는다
3. 단어들을 하나씩 출력하고 가운데 공백을 하나씩 입력해주고, 최종적으로 앞뒤의 공백을 trim해준다.


## products_of_array_except_self

주어진 배열의 모든 수를 곱한 수를 S라 하고, 배열을 돌면서 S / num[i] 를 처리하면 됩니다. 하지만 문제에서 나눗셈 연산자를 이용하지 말라는 조건이 존재합니다.

따라서 다음과 같은 방식을 활용합니다.
* num배열에 대해 2가지 배열을 DP를 이용하여 구할 수 있습니다.
    * prefix[i] -> 0번째 수부터 i번째 수까지의 곱. prefix[i + 1] == prefix[i] * num[i] 로 O(n)에 연산 가능합니다.
    * suffix[i] -> 마지막 수부터 i번째 수 까지의 곱. 뒤부터 채워나가면서 suffix[i - 1] == suffix[i] * num[i] 로 O(n)에 연산 가능합니다.
* 자기 자신을 제외한 수의 곱은 (자기 앞의 모든 수의 곱) * (자기 뒤의 모든 수의 곱) 입니다. 
* 따라서 i번째 수를 기준으로 정답의 i번째 수인 answer[i] 는 prefix[i - 1] * suffix [i + 1] 이 됩니다.
* 위 방식은 첫번째수와 마지막 수를 제외한 모든 수에 대해 연산 가능합니다. 실제로 생각해보면 answer[0] 의 값은 suffix[1] 이고, answer[n-1] 의 값은 prefix[n-2] 입니다.
* 하지만 예외처리하기 귀찮으므로 일관성을 해치지 않는 곱셈의 항등원 1을 prefix/suffix 배열 앞뒤로 넣어주면 모든 i에 대해 answer[i] 는 prefix[i - 1] * suffix [i + 1] 를 적용할 수 있습니다. ( 1 <= i <= n )
