const Intern = require("../lib/intern")

describe("getRole", () => {
    it('should return the string "Intern"', () => {
        const intern = new Intern('Nelson', 345, 'nelson@piedpiper.net', 'Stanford')

        expect(intern.getRole()).toEqual('Intern')
    })
})

describe("getSchool", () => {
    it('should return Stanford when getSchool() is run', () => {
        const intern = new Intern('Nelson', 345, 'nelson@piedpiper.net', 'Stanford');

        expect(intern.getSchool()).toEqual('Stanford')
    })

    it('should set school via constructor', () => {
        const intern = new Intern('Nelson', 345, 'nelson@piedpiper.net', 'Stanford');
        
        expect(intern.school).toEqual('Stanford')
    })
})

