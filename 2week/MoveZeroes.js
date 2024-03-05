/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.apply
            nums.push(0);
        }
    }
}
;
