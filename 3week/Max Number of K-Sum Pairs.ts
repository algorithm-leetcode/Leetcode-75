function maxOperations(nums: number[], k: number): number {
    let count = 0
    let numCountObject={}
    nums.forEach(num => {
        if(numCountObject[num] ==null){
            numCountObject[num] =1
        }else{
            numCountObject[num]++
        }
    } )
    Object.keys(numCountObject).forEach(key =>{
        let keyNum = parseInt(key)
        let foundKey = k-keyNum
        if(foundKey<=0) return
        if(numCountObject[foundKey] ==null) return
        if(keyNum == foundKey){
            count+= Math.floor(numCountObject[keyNum]/2)*2
        }else{
            count += Math.min(numCountObject[key],numCountObject[foundKey])
        }

    })


    return count/2
};