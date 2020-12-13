import { bagsColorsInput } from './day7Input.js'

const countShynyGoldBags = (bagsToFind, bagsSet, bags) => {
    const reducer = (accumulator, current) => `${accumulator}${current} |`

    let toFindBagRegex = bagsToFind.reduce(reducer, ' (').replace(/\|$/, ')')

    let filteredBags = bags
	.filter(bag => new RegExp(toFindBagRegex).test(bag))
	.map(bag => `${bag.split(' ')[0]} ${bag.split(' ')[1]}`)

    filteredBags.forEach(bag => bagsSet.add(bag))

    return filteredBags.length === 0 
	? bagsSet.size
	: countShynyGoldBags(filteredBags, bagsSet, bags)
}

console.log(countShynyGoldBags(
    ['shiny gold'],
    new Set(),
    bagsColorsInput.split('\n')
))

