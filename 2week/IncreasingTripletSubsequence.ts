function increasingTriplet(nums: number[]): boolean {
    let left = nums[0];
    let right = nums[nums.length-1]

    let cntArray = Array(nums.length)
    for(let i = 1 ; i< nums.length-1;i++){
        if(nums[i]> left) {
            cntArray[i] =1
        }else{
            cntArray[i] = 0
            left = nums[i]
        }
    }
    for(let i = nums.length-2 ; i>0 ;i--){
        if(nums[i]< right) {
            cntArray[i] +=1
        }else{
            cntArray[i] = 0
            right = nums[i]
        }

    }
    return cntArray.filter(i => i===2).length>=1

};