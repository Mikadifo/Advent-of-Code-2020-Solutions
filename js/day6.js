import { answersInput } from './day6Input.js'

let groupsAnswersCount = 0

const countAnswers = array => {
    for (let answer of array) {
	if (!answer) {
	    const FROM = array.indexOf(answer) + 1
	    const cut = array.splice(FROM, array.length)

	    array.pop()

	    const group = new Set([...array.join('').split('')])

	    groupsAnswersCount += group.size

	    countAnswers(cut)
	}
    }
}

countAnswers(answersInput.split('\n'))
console.log(groupsAnswersCount)

let yesAnswersCount = 0

const yesAnswersReducer = (accumulator, current) =>
    accumulator.filter(answer => current.includes(answer))

const yesAnswersCounter = yesAnswers => 
    yesAnswers.reduce(yesAnswersReducer, yesAnswers[0].split('')).length

const countYesAnswers = array => {
    for (let answer of array) {
	if (!answer) {
	    const FROM = array.indexOf(answer) + 1
	    const cut = array.splice(FROM, array.length)

	    array.pop()

	    yesAnswersCount += yesAnswersCounter(array)

	    countYesAnswers(cut)
	}
    }
}

countYesAnswers(answersInput.split('\n'))
console.log(yesAnswersCount)

