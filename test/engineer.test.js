const Engineer = require('../lib/engineer')
describe('Engineer', () => {
    let engineer
    beforeEach(() => {
        engineer = new Engineer('Bertram Gilfoyle', 666, 'gilfoyle@piedpiper.net', 'gilfoyle')
    })

describe('github', () => {
    it('should return a github URL via getGithub()', () => {
        
        expect(engineer.getGithub()).toEqual('http://www.github.com/gilfoyle')
    })

    it('can set GitHub account via constructor', () => {
        
        expect (engineer.github).toEqual('gilfoyle')
    })
})

describe('getRole', () => {
    it('getRole() should return Engineer', () => {
        const engineer = new Engineer();

        expect(engineer.getRole()).toEqual('Engineer');
    })
})
})