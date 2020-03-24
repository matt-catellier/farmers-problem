const findWhereToPlantSeeds = require('../findWhereToPlantSeeds')
var expect  = require('chai').expect;

describe('findWhereToPlantSeeds', () => {
    describe('Given a plot of land and 1 seed, When you plant your seeds', () => {
        const numSeeds = 1
            const plot = [
                [5,5,5,5,5],
                [5,4,2,1,3],
                [5,4,5,4,5],
                [1,4,1,1,3],
                [2,4,3,1,5],
            ]
        it('Then it should have score 1', () => {
            const actual = findWhereToPlantSeeds(numSeeds, plot)[0]
            expect(actual).to.equal(1)
      
        })
        it('Then it should plant at [[1,4]]', () => {
            const actual = findWhereToPlantSeeds(numSeeds, plot)[1]
            expect(actual).to.deep.equal([[1,4]])
        })
    })
    
    describe('Given a plot of land and 3 seed, When you plant your seeds', () => {
        const numSeeds = 3
        const plot = [
            [5,5,5,5,5],
            [5,4,2,1,3],
            [5,4,5,4,5],
            [1,4,1,1,3],
            [2,4,3,2,5],
        ]
        it('Then it should have score 2.5', () => {
            const actual = findWhereToPlantSeeds(numSeeds, plot)[0]
            expect(actual).to.equal(2.5)
        })
        it('Then it should plant at [[3, 2], [3,3], [4,3]]', () => {
            const actual = findWhereToPlantSeeds(numSeeds, plot)[1]
            expect(actual).to.deep.equal([[3, 2], [3,3], [4,3]])
        })
    })
})
