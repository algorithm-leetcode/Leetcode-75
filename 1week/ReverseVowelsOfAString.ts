function reverseVowels(s: string): string {
    const vowelList = ["a","e","i","o","u","A","E","I","O","U"]
    let vowelIdxList = []
    let wordList = s.split("");
    wordList.forEach((word,i)=>{
        if(vowelList.indexOf(word)!==-1){
            vowelIdxList.push(i)
        }
    })
    vowelIdxList.forEach((vowelIdx,i)=>{
        if(i>vowelIdxList.length/2-1)return
        let prevWord = wordList[vowelIdx]
        wordList[vowelIdx] = wordList[vowelIdxList[vowelIdxList.length-(i+1)]]
        wordList[vowelIdxList[vowelIdxList.length-(i+1)]] = prevWord
    })

    return wordList.join("")
}