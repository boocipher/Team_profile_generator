const Employee = require('../lib/Employee');

// describe("Employee", () => {
//     describe("Can set via constructor arguments", () => {

//     })
// })

test("Can set name via constructor argument", ()=> {
    const name = "Aaron";
    const emp = new Employee(name);
    expect(emp.name).toBe(name)
})

test("getName returns employees name", ()=> {
    const name = "Aaron";
    const emp = new Employee(name);
    expect(emp.getName()).toBe(name);
})