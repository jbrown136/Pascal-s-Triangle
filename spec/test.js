const {expect} = require('chai')
const {triangle, pyramid} = require("../pascalsTriangle")

describe("Pascal's triangle", ()=> {
    it("gives the zeroeth term of pascals triangle", ()=> {
        expect(triangle(0)).to.eql([1])
    })
    it("gives the first term of pascals triangle", ()=> {
        expect(triangle(1)).to.eql([1, 1])
    })
    it("gives the second term of pascals triangle", ()=> {
        expect(triangle(2)).to.eql([1, 2, 1])
    })
    it("gives the third term of pascals triangle", ()=> {
        expect(triangle(3)).to.eql([1, 3, 3, 1])
    })
    it("gives the fourth term of pascals triangle", ()=> {
        expect(triangle(4)).to.eql([1, 4, 6, 4, 1])
    })
    it("gives the tenth term of pascals triangle", ()=> {
        expect(triangle(10)).to.eql([1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1])
    })
})

describe("Pascal's pyrsamid", ()=> {
    it("gives the zeroeth row of Pascal's pyramid", ()=>{
        expect(pyramid(0)).to.eql({0: [1]})
    })
    it("gives the first row of Pascal's pyramid", ()=>{
        expect(pyramid(1)).to.eql({0: [1, 1], 1: [1]})
    })
    it("gives the second row of Pascal's pyramid", ()=>{
        expect(pyramid(2)).to.eql({0: [1, 2, 1], 1: [2, 2], 2: [1]})
    })
    it("gives the third row of Pascal's pyramid", ()=>{
        expect(pyramid(3)).to.eql({0: [1, 3, 3, 1], 1: [3, 6, 3], 2: [3, 3], 3: [1]})
    })
})