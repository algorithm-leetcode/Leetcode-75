function maxArea(height: number[]): number {
    let max = 0
    let leftIdx =0
    let rightIdx=height.length-1
    let width = 0
    let hei = 0
    let wide = 0
    while (rightIdx!=leftIdx){
        width= rightIdx-leftIdx
        hei = Math.min(height[leftIdx],height[rightIdx])
        wide = width * hei
        max = max > wide ? max : wide

        if(height[leftIdx]> height[rightIdx]){
            rightIdx--
        }else{
            leftIdx ++
        }
    }
    return max
};