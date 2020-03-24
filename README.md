A farmer needs to find where to plant seeds on a plot of land, but some land is more suitable for farming than others.
Given a certain number of seeds, you want to plant your seeds on adjoining areas to yield the best results.

i.e.
[
    [5,5,5,5,5],
    [5,4,2,1,3],
    [5,4,5,4,5],
    [1,4,1,1,3],
    [2,4,3,1,5],
]
You have been given a 25 acres plot of land.
Each entry represents 1 acre, and the number represents how steep the land is. 
The steep the land, the less crops they will reveal.
A 5 represents a cliff, and you cannot plot or move there.
You must plant your seeds on adjoining acres, and cannot move move over a cliff.
Cannot access other acres diagonally

To give each area a score you can take the number and find the inverse fraction of that number.

-> findWhereToPlotSeeds(numSeeds, map) -> score, plot[[y,x]] 
numSeeds = 3
return 3, [[3, 2], [3,3], [4,3]]
