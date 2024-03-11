function longestOnes(nums: number[], k: number): number {
    let left = 0
    let right = 0
    let max = 0
    let cnt = 0

    for(let i = 0 ; i<nums.length;i++){
       if(nums[i]==0){
           if(cnt>= k){
               if(nums[left]==0){
                cnt--
               }
               right++
               left++
               cnt++

           }else{
               right++
               cnt++
           }
       }else{
           if(cnt>k){
               if(nums[left]==0){
                   cnt--
               }
               left++
           }
            right++
       }

        max = max> right-left ? max : right-left
    }
    return max
};