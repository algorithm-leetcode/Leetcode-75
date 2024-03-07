function findMaxAverage(nums: number[], k: number): number {
    let max = Number.NEGATIVE_INFINITY
    let lastIdx = k-1
    let sum = 0
    for(let i = 0 ; i<k;i++){
        sum += nums[i]
    }
    while (lastIdx<nums.length){
        max = max>=sum ? max : sum
        lastIdx++
        sum = sum + nums[lastIdx] - nums[lastIdx-k]

    }
    return Number((max/k).toFixed(5))
};