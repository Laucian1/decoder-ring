const {expect} = require("chai")
const {caesar} = require("../src/caesar")

describe("caesar error handling", () => {
    it("should return false if the shift argument is empty", () => {
        const message = "zebra magazine"
        const actual = caesar(message, null)

        expect(actual).to.be.false
    })

    it("should return false if the shift argument is 0", () => {
        const message = "zebra magazine"
        const shift = 0
        const actual = caesar(message, shift)

        expect(actual).to.be.false
    })

    it("should return false if the shift argument is greater than 25", () => {
        const message = "zebra magazine"
        const shift = 26
        const actual = caesar(message, shift)

        expect(actual).to.be.false
    })

    it("should return false if the shift argument is less than -25", () => {
        const message = "zebra magazine"
        const shift = -26
        const actual = caesar(message, shift)

        expect(actual).to.be.false
    })
})

describe("caesar encoding", () => {
    it("should encode a message by shifting the letters", () => {
        const message = "message"
        const shift = 3
        const expected = "phvvdjh"
        const actual = caesar(message, shift)

        expect(actual).to.equal(expected)
    })

    it("should leave spaces and symbols in place", () => {
        const message = "a message."
        const shift = 3
        const expected = "d phvvdjh."
        const actual = caesar(message, shift)

        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", () => {
        const message = "A Message"
        const shift = 3
        const expected = "d phvvdjh"
        const actual = caesar(message, shift)

        expect(actual).to.equal(expected)
    })

    it("should wrap for letters shifting through the end of the alphabet", () => {
        const message = "zebra magazine"
        const shift = 3
        const expected = "cheud pdjdclqh"
        const actual = caesar(message, shift)

        expect(actual).to.equal(expected)
    })

    it("should wrap for letters shifting through the beginning of the alphabet", () => {
        const message = "zebra magazine"
        const shift = -3
        const expected = "wbyox jxdxwfkb"
        const actual = caesar(message, shift)

        expect(actual).to.equal(expected)
    })
})

describe("caesar decoding", () => {
    it("should decode a message by shifting the letters", () => {
        const message = "phvvdjh"
        const shift = 3
        const expected = "message"
        const actual = caesar(message, shift, false)

        expect(actual).to.equal(expected)
    })

    it("should leave symbols and spaces in place", () => {
        const message = "d phvvdjh."
        const shift = 3
        const expected = "a message."
        const actual = caesar(message, shift, false)

        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", () => {
        const message = "D Phvvdjh"
        const shift = 3
        const expected = "a message"
        const actual = caesar(message, shift, false)

        expect(actual).to.equal(expected)
    })

    it("should wrap for letters shifting through the end of the alphabet", () => {
        const message = "cheud pdjdclqh"
        const shift = 3
        const expected = "zebra magazine"
        const actual = caesar(message, shift, false)

        expect(actual).to.equal(expected)
    })

    it("should wrap for letters shifting through the beginning of the alphabet", () => {
        const message = "wbyox jxdxwfkb"
        const shift = -3
        const expected = "zebra magazine"
        const actual = caesar(message, shift, false)

        expect(actual).to.equal(expected)
    })
})
