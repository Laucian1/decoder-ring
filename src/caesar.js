// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //bad input handling
    if (!shift || shift > 25 || shift < -25) {return false}
    //shift flip for decoding
    if (!encode) {shift *= -1}
    //Split and handle the message
    return input.toLowerCase().split("").map((character) => {
        //return any non-letters
        if (character.charCodeAt(0) < 97 || character.charCodeAt(0) > 122) {
            return character
        }
        //new variable to handle letter changes
        let charNum = character.charCodeAt(0) + parseInt(shift)
        //If it shifts past the end, return to the beginning
        if (charNum > 122) {
            charNum = 96 + (charNum - 122)
        }
        //If it shifts past the beginning, return to the end
        else if(charNum < 97) {
            charNum += 26
        }
        //return the character number as a string
        return String.fromCharCode(charNum)
        //and put it all together
    }).join('')
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
