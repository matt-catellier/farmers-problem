/*
const plot = [
    [5,5,5,5,5],
    [5,4,2,1,3],
    [5,4,5,4,5],
    [1,4,1,1,3],
    [2,4,3,1,5],
    - go through each, and plant all all neightbouring seeds to see the score that would give you
]
*/

const plantSeed = (y, x, map, remainingSeeds, plot, score) => {
    console.log('== recursive call ==')
    if(remainingSeeds === 0) return score
    let acreValue = 0
    let seeds = remainingSeeds
    if(map[y][x] !== 5) {
        acreValue = 1/map[y][x]
        plot.push([y,x])
        seeds = remainingSeeds - 1
        
    }
    console.log("===========")
    console.log('x,y', x, y)
    console.log('value', map[y][x], acreValue)
    console.log('current score', score)
    console.log('next score', score + acreValue)

    // up
    if(y !== 0) {
        return plantSeed(y - 1,x,map,seeds, plot, score + acreValue)
    }
    // up
   
    // // right
    // plantSeed(y,x + 1,map,remainingSeeds - 1, plot, score + acreValue)
    // // left
    // plantSeed(y,x - 1,map,remainingSeeds - 1, plot, score + acreValue)
    // // down
    // plantSeed(y + 1,x,map,remainingSeeds - 1, plot, score + acreValue)
}

const findWhereToPlantSeeds = (seeds, map) => {
    const plot = []
    const score = 0
    for(let y = 0; y < map.length; y++) {
        for(let x = 0; x < map[y].length; x++) {
            console.log("===  in loop ====")
            console.log(plantSeed(y, x, map, seeds, [], 0))
        }
    }
    return [score, plot]
}

module.exports = findWhereToPlantSeeds