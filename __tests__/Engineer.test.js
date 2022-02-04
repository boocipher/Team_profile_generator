const Engineer = require('../lib/Engineer')

test('sets role as Engineer', () => {
    const role = 'Engineer';
    const github = 'bettygithub'
    const eng = new Engineer('Betty', '123', 'betty@co.com', github);
    expect(eng.getRole()).toBe(role);
    expect(eng.getGithub()).toBe(github)
})

test('sets github username via constructor', () => {
    const role = 'Engineer';
    const github = 'bettygithub'
    const eng = new Engineer('Betty', '123', 'betty@co.com', github);
    expect(eng.getGithub()).toBe(github)
})