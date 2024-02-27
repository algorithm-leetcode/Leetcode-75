function reverseWords(s: string): string {
    return s.trim().split(" ")
        .map((word,i,ar)=>ar[ar.length-(i+1)])
        .filter((s)=>s!=="")
        .join(" ")
}