function mergeAlternately(word1: string, word2: string): string {

    const shorterWord = word1.length<=word2.length? word1:word2
    const longerWord = word1.length>word2.length? word1:word2
    let answer = ""

    for(let i = 0;i<shorterWord.length;i++){
        answer+=word1[i]
        answer+=word2[i]
    }

    answer+= longerWord.slice(answer.length/2)
    return answer
};