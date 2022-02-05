const Employee = require('../lib/Employee');

// describe("Employee", () => {
//     describe("Can set via constructor arguments", () => {

//     })
// })

test("Can set name via constructor method", ()=> {
    const name = "Aaron";
    const emp = new Employee(name);
    expect(emp.name).toBe(name)
})

test("getName returns employee's name", ()=> {
    const name = "Aaron";
    const emp = new Employee(name);
    expect(emp.getName()).toBe(name);
})

test("Can set id via constructor method", ()=> {
    const id = "123";
    const emp = new Employee(undefined, id, undefined);
    expect(emp.id).toBe(id)
})

test("User enters ID as a numeric string", ()=> {
    const id = 123;
    const emp = new Employee(undefined, id, undefined);
    expect(typeof emp.id).toBe('number')
})

test("getId returns employee's id", ()=> {
    const id = "123";
    const emp = new Employee(undefined, "123", undefined);
    expect(emp.getId()).toBe(id)
})

test("Can set email via constructor method", ()=> {
    const email = "email@myco.com";
    const emp = new Employee(undefined, undefined, "email@myco.com");
    expect(emp.email).toBe(email)
})

test("getEmail returns email address", ()=> {
    const email = "email@myco.com";
    const emp = new Employee(undefined, undefined, email);
    expect(emp.getEmail()).toBe(email)
})

test("getRole returns role", ()=> {
    const role = "Employee";
    const emp = new Employee(undefined, undefined, undefined);
    expect(emp.getRole()).toBe(role)
})