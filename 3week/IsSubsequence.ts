function isSubsequence(s: string, t: string): boolean {
    let index = -1
    let prevIndex = -1
    for(let i = 0 ; i<s.length;i++){
        index = t.indexOf(s[i],prevIndex+1)
        if(index===-1) return false

        if(prevIndex>index) return false
        prevIndex = index

    }
    return true
};

isSubsequence("abc","ahbgdc")