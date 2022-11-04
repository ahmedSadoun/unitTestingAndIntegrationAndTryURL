const lib = require('../lib.js')
//in order to group a punch of related tests we could use 
describe('absolute', () => {
    //we could replace test function with it, like this 
    //plain english 
    it('should return a positive number if input is positive', () => {
        let result = lib.absolute(1)
        expect(result).toBe(1);
    })
    it('should return a positive number if input is negativ', () => {
        let result = lib.absolute(-1)
        expect(result).toBe(1);
    })
    it('should return 0  if input is 0', () => {
        let result = lib.absolute(0)
        expect(result).toBe(0);
    })
})
describe('greet', () => {
    //when testing strings, make sure that the test isnot to specific, or to general.
    it('should return the greeting message', () => {
        const result = lib.greet('mosh')
        //regex: if the message that will be printed contains mosh word, then it is correct.
        //inside toMatch we use regex.
        expect(result).toMatch(/mosh/)
        //instead of using regex we could use toConatin method to check if the message contains  the expected word or not 
        expect(result).toContain('mosh')
    })
})
describe('getCurrencies', () => {
    //when testing strings, make sure that the test isnot to specific, or to general.
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();
        // Too general 
        //if the function will be refactored to return a number, this test will work
        expect(result).toBeDefined()
        expect(result).not.toBeNull()
        // Too specific
        //here we are testing the exact location of theses elements,if we decided to use a sorting algorithm then this test is gonna break
        expect(result[0]).toBe('USD')
        expect(result[1]).toBe('AUD')
        expect(result[2]).toBe('EUR')
        //another to specific assertion
        expect(result.length).toBe(3)
        //Proper way
        expect(result).toContain('EUR')
        expect(result).toContain('USD')
        expect(result).toContain('AUD')
        //Ideal way
        expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']))
    })
})

describe('getProduct', () => {
    it('should return the product with the given id', () => {
        const result = lib.getProduct(1);
        //this method to check on the properties of interest inside an object
        expect(result).toMatchObject({ id: 1, price: 10 });
        //another way, is to check if an object contains a specific property
        expect(result).toHaveProperty('id', 1)
    })

})