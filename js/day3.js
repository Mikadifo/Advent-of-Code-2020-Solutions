import { map } from './day3Input.js'

const mapArray = map.split('\n')

let trees = 0
let position = 3
let currentSquare = 0
let missingTimes = 1

const TREE = '#'

mapArray.shift()

mapArray.forEach(currentLine => {
    currentSquare = currentLine[position]

    if (!currentSquare) {
	missingTimes ++
	currentLine = currentLine.repeat(missingTimes)
	currentSquare = currentLine[position]
    }

    if (currentSquare === TREE) trees ++

    position += 3
})

//console.log(trees)

const moveInMap = (right, down) => {
    let skipTimes = down
    position = 0
    trees = 0
    currentSquare = 0

    for (let currentLine of mapArray) {
	if (skipTimes > 1) {
	    skipTimes --
	    continue
	}
	skipTimes = down
	position += right

	currentSquare = currentLine[position % currentLine.length]

	if (currentSquare === TREE) trees ++
    }

    return trees
}

trees = moveInMap(1, 1) * //84
	moveInMap(3, 1) * //228
	moveInMap(5, 1) * //89
	moveInMap(7, 1) * // 100
	moveInMap(1, 2) //40

console.log(trees)

