function compress(chars: string[]): number {
    if(chars.length===1) return 1

    let newWord = ""
    let count =0
    let index = 0
    let totalIdxCount = 0

    for(let i = 0; i<chars.length;i++){
        if(i===0){
            newWord=chars[i]
            count++
            continue
        }
        if(chars[i]===newWord){
            count ++
        }else{
            if(count !==1){
                chars.splice(index+1,count-1,...(count.toString().split("")))
                i = i-count+1+count.toString().length
            }
            index = i
            newWord = chars[i]
            count=1
        }

        if(i===chars.length-1){
            if(count ===1 ){
                break
            }else{
                chars.splice(index+1,count-1,...count.toString().split(""))
                break
            }
        }


    }
    return chars.length

};