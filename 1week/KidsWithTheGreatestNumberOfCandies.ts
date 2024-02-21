function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    return candies.map((candy,i) =>
        candies.filter((candy2,i2)=>i!==i2).filter(comparingCandy =>(candy+extraCandies)<comparingCandy).length===0
    )
};