function productExceptSelf(nums: number[]): number[] {
    let answer = []

    let after = 1
    let before =1
    nums.forEach((num,i)=> answer.push(1))
    nums.forEach((num,i,numarray)=> {
        answer[i]=answer[i]*before
        before = before*nums[i]

        answer[nums.length-(i+1)] = answer[nums.length-(i+1)]*after
        after = after*nums[nums.length-(i+1)]
    })

    return answer

}