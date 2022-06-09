const {expect} = require("chai")
const {substitution} = require("../src/substitution")

describe("substitution error handling", () => {
    it("should return false if there is not substitution alphabet", () => {
        const message = "message"
        const actual = substitution(message)

        expect(actual).to.be.false
    })

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "message"
        const alphabet = "2short"
        const actual = substitution(message, alphabet)

        expect(actual).to.be.false
    })

    it("should return false if the substitution alphabet is not entirely unique characters", () => {
        const message = "message"
        const alphabet = "abcdeabcdeabcdeabcdeabcdea"
        const actual = substitution(message, alphabet)

        expect(actual).to.be.false
    })
})

describe("substitution encoding", () => {
    it("should encode a message by using the substitution alphabet", () => {
        const message = "message"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const expected = "ykrrpik"
        const actual = substitution(message, alphabet)

        expect(actual).to.equal(expected)
    })

    it("should work any kind of key with unique characters", () => {
        const message = "message"
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
        const expected = "ysii.rs"
        const actual = substitution(message, alphabet)

        expect(actual).to.equal(expected)
    })

    it("should leave spaces be", () => {
        const message = "my message"
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
        const expected = "yp ysii.rs"
        const actual = substitution(message, alphabet)

        expect(actual).to.equal(expected)
    })
})

describe("substitution decoding", () => {
    it("should decode a message by using the substitution alphabet", () => {
        const message = "ykrrpik"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const expected = "message"
        const actual = substitution(message, alphabet, false)

        expect(actual).to.equal(expected)
    })

    it("should work any kind of key with unique characters", () => {
        const message = "ysii.rs"
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
        const expected = "message"
        const actual = substitution(message, alphabet, false)

        expect(actual).to.equal(expected)
    })

    it("should leave spaces be", () => {
        const message = "yp ysii.rs"
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl"
        const expected = "my message"
        const actual = substitution(message, alphabet, false)

        expect(actual).to.equal(expected)
    })
})
