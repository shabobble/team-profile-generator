const Intern = require("../lib/intern")

describe('Intern', () => {
    let intern
    beforeEach(() => {
        intern = new Intern('Nelson', 345, 'nelson@piedpiper.net', 'Stanford')
    })
    
    describe("getRole", () => {
    it('should return the string "Intern"', () => {
        
        expect(intern.getRole()).toEqual('Intern')
    })
})

describe("getSchool", () => {
    it('should return Stanford when getSchool() is run', () => {
        
        expect(intern.getSchool()).toEqual('Stanford')
    })

    it('should set school via constructor', () => {
                
        expect(intern.school).toEqual('Stanford')
        })
    })
})
