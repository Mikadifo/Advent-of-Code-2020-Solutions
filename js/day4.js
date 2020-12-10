import { passportsInput } from './day4Input.js'

const passports = passportsInput.split(/\s/)
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
