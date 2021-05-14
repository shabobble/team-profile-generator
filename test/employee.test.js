const Employee = require("../lib/employee")

describe('Employee', () => {
    let employee
    beforeEach(() => {
        employee = new Employee('Jared Dunn', 345, 'jdunn@piedpiper.net')
    })

    it('can instantiate Employee instance', () => {
        const employee = new Employee()

        expect(employee).toBeTruthy();
    })

    it('can set name, id, and e-mail via constructor arguments', () => {
        
        expect(employee.name).toEqual('Jared Dunn');
        expect(employee.id).toEqual(345);
        expect(employee.email).toEqual('jdunn@piedpiper.net')
    })

    it('can get name via getName() function', () => {
        
        expect(employee.getName()).toEqual('Jared Dunn');

    })

    it('can get id via getId() function', () => {
                
        expect(employee.getId()).toEqual(345);
    })

    it('can get email via getEmail() function', () => {
        
        expect(employee.getEmail()).toEqual('jdunn@piedpiper.net')
    })

    it('getRole() should return Employee', () => {
        const employee = new Employee();

        expect(employee.getRole()).toEqual('Employee')
    })
})
