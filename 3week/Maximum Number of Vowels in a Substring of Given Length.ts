function maxVowels(s: string, k: number): number {
    let vowels = "aeiou"
    let max = Number.NEGATIVE_INFINITY
    let lastidx = k-1
    let cnt = 0

    for(let i = 0 ; i<k ; i++){
        if(vowels.indexOf(s[i])!=-1) cnt++
    }

    while (lastidx<s.length){
        max = max > cnt ? max : cnt

        lastidx++

        if(vowels.indexOf(s[lastidx-k])!=-1) cnt--
        if(vowels.indexOf(s[lastidx])!=-1) cnt++


    }
    return max


};