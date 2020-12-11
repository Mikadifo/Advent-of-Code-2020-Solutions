import { answersInput } from './day6Input.js'

const groupsAnswers = answersInput.split('\n')

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

countAnswers(groupsAnswers)
console.log(groupsAnswersCount)

