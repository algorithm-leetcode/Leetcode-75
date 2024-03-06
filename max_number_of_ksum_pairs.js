/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    var answer = 0
    nums.sort((x, y) => x - y)

    console.log(nums)
    var left = 0
    var right =nums.length-1;
    while(left < right){
        if(nums[left] + nums[right] == k){
            answer += 1
            left += 1
            right -= 1
        }
        else if(nums[left] + nums[right] > k){
           right -= 1
        }
        else{
            left += 1
        }
    }
    return answer
};
