import { passportsInput } from './day4Input.js'

let passports = passportsInput.split(/\s/)
let validPassports = 0

const isPassportValid = passport => {
    if (passport.length === 8) return true

    passport = passport.join('')

    return (
	    passport.includes('byr:') &&
	    passport.includes('iyr:') &&
	    passport.includes('eyr:') &&
	    passport.includes('hgt:') &&
	    passport.includes('hcl:') &&
	    passport.includes('ecl:') &&
	    passport.includes('pid:')
    )
}

const countValidPassports = array => {
    for (let field of array) {
	if (!field) {
	    const FROM = array.indexOf(field) + 1
	    const cut = array.splice(FROM, array.length)

	    array.pop()

	    validPassports += isPassportValid(array) ? 1 : 0

	    countValidPassports(cut)
	}
    }
}

countValidPassports(passports)
console.log(validPassports)

passports = passportsInput.split(/\s/)
validPassports = 0
const isPassportValidPart2 = passport => {
    const currentPassport = passport
    passport = passport.join('')

    if (
    	passport.includes('byr:') &&
    	passport.includes('iyr:') &&
    	passport.includes('eyr:') &&
    	passport.includes('hgt:') &&
    	passport.includes('hcl:') &&
    	passport.includes('ecl:') &&
    	passport.includes('pid:')
    ) {
	for (let field of currentPassport) {
	    let splittedField = field.split(':')

	    switch (splittedField[0]) {
		case 'byr':
		    if (splittedField[1] < 1920 || splittedField[1] > 2002) 
			return false

		    break
		case 'iyr':
		    if (splittedField[1] < 2010 || splittedField[1] > 2020)
			return false

		    break
		case 'eyr':
		    if (splittedField[1] < 2020 || splittedField[1] > 2030)
			return false

		    break
		case 'hgt':
		    if (splittedField[1].includes('cm')) {
			if (
			    splittedField[1].slice(0, -2) < 150 ||
			    splittedField[1].slice(0, -2) > 193
			) return false
		    } else if (splittedField[1].includes('in')) {
			if (
			    splittedField[1].slice(0, -2) < 59 ||
			    splittedField[1].slice(0, -2) > 76
			) return false
		    } else return false

		    break
		case 'hcl':
		    if (!/^#[0-9a-f]{6}$/.test(splittedField[1]))
			return false

		    break
		case 'ecl':
		    if (!/^(amb)|(blu)|(brn)|(gry)|(grn)|(hzl)|(oth)$/.test(splittedField[1]))
			return false

		    break
		case 'pid':
		    if (!/^\d{9}$/.test(splittedField[1]))
			return false
	    }
	}

	return true
    }
}

const countValidPassportsPart2 = array => {
    for (let field of array) {
	if (!field) {
	    const FROM = array.indexOf(field) + 1
	    const cut = array.splice(FROM, array.length)

	    array.pop()

	    validPassports += isPassportValidPart2(array) ? 1 : 0

	    countValidPassportsPart2(cut)
	}
    }
}

countValidPassportsPart2(passports)
console.log(validPassports)
