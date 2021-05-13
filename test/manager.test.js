const Manager = require("../lib/Manager")

describe('officeNumber', () => {
    it('should set office number via constructor', () => {
        const manager = new Manager('Glenn Sturgis', 123, 'gsturgis@cloud9stores.com', 34)

        expect(manager.officeNumber).toEqual(34);
    })

    it('getOfficeNumber should return an office number', () => {
        const manager = new Manager('Glenn Sturgis', 123, 'gsturgis@cloud9stores.com', 34);
        
        expect(manager.getOfficeNumber()).toEqual(34);
    })
}) 

describe('getRole', () => {
    it('should return "Manager"', () => {
        const manager = new Manager('Glenn Sturgis', 123, 'gsturgis@cloud9stores.com', 34);

        expect(manager.getRole()).toEqual('Manager')
    })
})