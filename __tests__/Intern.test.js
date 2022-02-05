const Intern = require('../lib/Intern')

test('sets role as Intern', () => {
    const role = 'Intern'
    const school = 'UT Austin'
    const intern = new Intern(undefined, undefined, undefined, school)
    expect(intern.getRole()).toBe(role)
})

test('sets school via constructor', () => {
    const role = 'Intern'
    const school = 'UT Austin'
    const intern = new Intern(undefined, undefined, undefined, school)
    expect(intern.getSchool()).toBe(school)
})
