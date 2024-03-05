/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let count = 0

    for(let i = 0 ;i<nums.length;i++){
        if(nums[i]===0){
            nums.splice(i,1)
            count++
            i--
        }
    }
    for(let i = 0 ;i<count;i++){
        nums.push(0)
    }

};