function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    flowerbed.unshift(0);
    flowerbed.push(0);

    let countOfCanBedFlower = 0
    flowerbed.forEach((flowered,i)=>{
        if(i===0 || i===flowerbed.length-1) return
        if(flowered===1) return
        if(flowerbed[i-1]===1) return
        if(flowerbed[i+1]===1) return

        flowerbed.splice(i,1,1)
        countOfCanBedFlower++
    })
    return countOfCanBedFlower>=n
}