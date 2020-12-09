import { expenseReport } from './day1Input.js'

const getKeyFromExpenseReport = input => {
    input.forEach(number => {
	let toFindNumber = 2020 - number

	if (input.includes(toFindNumber))
	    console.log('Key is: ', number * toFindNumber)
    })
}

const getKeyFromExpenseReportPartTwo = input => {
    let number1, number2, number3

    input.forEach(number => {
	input.forEach(numberTwo => {
	    let toFindNumber = 2020 - number - numberTwo

	    if (input.includes(toFindNumber)) {
		number1 = number
		number2 = numberTwo
		number3 = toFindNumber
	    }
		
	})
    })

    console.log('Key is: ', number1 * number2 * number3)
}

getKeyFromExpenseReport(expenseReport)
getKeyFromExpenseReportPartTwo(expenseReport)
























