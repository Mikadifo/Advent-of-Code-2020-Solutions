import { passwordsInput } from './day2Input.js'

let input = passwordsInput.split('\n')
let pass = {}
let policy = []
let regex
let matches = 0
let valids = 0

input.forEach(password => {
    policy = password.split(':')[0].split(' ')

    pass.minTimes = policy[0].split('-')[0]
    pass.maxTimes = policy[0].split('-')[1]
    pass.letter = policy[1]
    pass.value = password.split(':')[1]

    regex = new RegExp(pass.letter, 'g')
    matches = (pass.value.match(regex) || []).length

    if (matches >= pass.minTimes && matches <= pass.maxTimes)
	valids ++
})

console.log(valids)

valids = 0

input.forEach(password => {
    policy = password.split(':')[0].split(' ')

    pass.first = policy[0].split('-')[0]
    pass.second = policy[0].split('-')[1]
    pass.letter = policy[1]
    pass.value = password.split(':')[1]

    let firstChar = pass.value.charAt(pass.first)
    let secondChar = pass.value.charAt(pass.second)


    if (
	(firstChar === pass.letter && secondChar !== pass.letter) ||
	(firstChar !== pass.letter && secondChar === pass.letter)
    ) valids ++
})

console.log(valids)





















