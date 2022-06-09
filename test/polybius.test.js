const {expect} = require("chai")
const {polybius} = require("../src/polybius")

describe("polybius encoding", () => {
    it("should return a string by translating each letter to a number pair", () => {
        const message = "message"
        const expected = "23513434112251"
        const actual = polybius(message)

        expect(actual).to.equal(expected)
    })

    it("should translate both i and j as 42", () => {
        const message = "jiggle"
        const expected = "424222221351"
        const actual = polybius(message)

        expect(actual).to.equal(expected)
    })

    it("should leave spaces where they lie", () => {
        const message = "my message"
        const expected = "2345 23513434112251"
        const actual = polybius(message)

        expect(actual).to.equal(expected)
    })
})

describe("polybius decoding", () => {
    it("should return a string by translating each number pair to a letter", () => {
        const message = "23513434112251"
        const expected = "message"
        const actual = polybius(message, false)

        expect(actual).to.equal(expected)
    })

    it("should translate 42 to i and j", () => {
        const message = "424222221351"
        const actual = polybius(message, false)

        expect(actual).to.include("i")
        expect(actual).to.include("j")
    })

    it("should leave spaces where they lie", () => {
        const message = "2345 23513434112251"
        const expected = "my message"
        const actual = polybius(message, false)

        expect(actual).to.equal(expected)
    })

    it("should return false if the length of the number string is odd", () => {
        const message = "2345 235134341122512"
        const actual = polybius(message, false)

        expect(actual).to.be.false
    })
})