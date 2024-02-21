function gcdOfStrings(str1: string, str2: string): string {
    //���� �ٲ㼭 ���������� �ٸ� ���ڿ��� ���
    if((str1+str2)!==(str2+str1)) return ""

    //������ �ݺ��Ǵ� �ִ� ���ڿ� ����
    const longerStr = str1.length >= str2.length?str1:str2
    const shorterStr = str1.length < str2.length?str1:str2

    const repeatWordLength = getGCD(longerStr.length,shorterStr.length);

    return longerStr.slice(0,repeatWordLength)
};


//a>b �϶� a/b �� ������ r�� ���Ͽ� a,b�� �ִ� ������� b,r�� �ִ� ������� ������ �̿��� ����Լ� ����
const getGCD = ( bigNum: number,smallNum:number) =>{

    if(bigNum%smallNum===0) return smallNum
    return getGCD(smallNum,bigNum%smallNum)

}