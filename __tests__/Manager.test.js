const Manager = require('../lib/Manager')

test('sets role as Manager', () => {
    const role = 'Manager';
    const officeNumber = '10';
    const mngr = new Manager(undefined, undefined, undefined, officeNumber)
    expect(mngr.getRole()).toBe(role);
})

test('sets office number via constructor', () => {
    const role = 'Manager';
    const officeNumber = '10';
    const mngr = new Manager(undefined, undefined, undefined, officeNumber)
    expect(mngr.getOfficeNumber()).toBe(officeNumber);
})