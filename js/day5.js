import { passesInput } from './day5Input.js'

const passes = passesInput.split('\n')

const decodeRows = pass => {
    const MIN_ROWS = 0
    const MAX_ROWS = 127

    let from = MIN_ROWS
    let intermediate = 0
    let to = MAX_ROWS
    let rows = ''

    rows = pass.slice(0, 7)

    for (let letter of rows) {
	intermediate = (from + to) / 2

	if (letter === 'F') to = Math.floor(intermediate)
	if (letter === 'B') from = Math.round(intermediate)
    }

    return (from || to)
}

const decodeCols = pass => {
    const MIN_COLS = 0
    const MAX_COLS = 7

    let from = MIN_COLS
    let intermediate = 0
    let to = MAX_COLS
    let cols = ''

    cols = pass.slice(-3)

    for (let letter of cols) {
	intermediate = (from + to) / 2

	if (letter === 'L') to = Math.floor(intermediate)
	if (letter === 'R') from = Math.round(intermediate)
    }

    return (from || to)
}

const SEATS_IDS = passes.map(pass => decodeRows(pass) * 8 + decodeCols(pass))

const HIGHEST_SEAT_ID = Math.max(...SEATS_IDS)

const findMySeatID = () => {
    let toFindSeat = Math.min(...SEATS_IDS)

    for(let seatId of SEATS_IDS) {
	if (!SEATS_IDS.includes(toFindSeat)) 
	    return toFindSeat

	toFindSeat ++
    }
 }

console.log(HIGHEST_SEAT_ID)
console.log(findMySeatID())

