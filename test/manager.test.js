const Manager = require("../lib/Manager")

describe('Manager', () => {
    let manager
    beforeEach(() => {
        manager = new Manager('Glenn Sturgis', 123, 'gsturgis@cloud9stores.com', 34)
    })

    describe('officeNumber', () => {

        it('should set office number via constructor', () => {
            expect(manager.officeNumber).toEqual(34);
        })

        it('getOfficeNumber should return an office number', () => {
            expect(manager.getOfficeNumber()).toEqual(34);
        })
    }) 

    describe('getRole', () => {
        it('should return "Manager"', () => {
            expect(manager.getRole()).toEqual('Manager')
        })
    })
})