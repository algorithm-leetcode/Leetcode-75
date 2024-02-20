function gcdOfStrings(str1: string, str2: string): string {
    //둘을 바꿔서 연결했을때 다른 문자열인 경우
    if((str1+str2)!==(str2+str1)) return ""

    //무조건 반복되는 최대 문자열 존재
    const longerStr = str1.length >= str2.length?str1:str2
    const shorterStr = str1.length < str2.length?str1:str2

    const repeatWordLength = getGCD(longerStr.length,shorterStr.length);

    return longerStr.slice(0,repeatWordLength)
};


//a>b 일때 a/b 한 나머지 r에 대하여 a,b의 최대 공약수는 b,r의 최대 공약수와 같음을 이용한 재귀함수 구현
const getGCD = ( bigNum: number,smallNum:number) =>{

    if(bigNum%smallNum===0) return smallNum
    return getGCD(smallNum,bigNum%smallNum)

}