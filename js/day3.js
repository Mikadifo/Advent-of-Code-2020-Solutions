import { map } from './day3Input.js'

const mapArray = map.split('\n')
mapArray.shift()

let tress = 0
let position = 3
let currentSquare = 0
let missingTimes = 1

const TREE = '#'
const cut = () => tress ++

mapArray.forEach(currentLine => {
    currentSquare = currentLine[position]

    if (!currentSquare) {
	missingTimes ++
	currentLine = currentLine.repeat(missingTimes)
	currentSquare = currentLine[position]
    }

    if (currentSquare === TREE) cut()

    position += 3
})

console.log(tress)

