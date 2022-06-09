// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {  
    
  function substitution(input, alphabet, encode = true) {
      //check for inputs, unique characters, and length
      if (!input || !alphabet || 
        Array.from(new Set(alphabet)).length !==26) {
        return false
      }

      //set up objects and return message
      let cypher = {}
      let reCypher = {}
      let message = ''
      //alpha is standard, omega is given alphabet
      const alpha = 'abcdefghijklmnopqrstuvwxyz'
      const omega = alphabet.split('')

      //for each letter in the alphabet
      alpha.split('').forEach((letter, index) => {
      //add it to the cypher and reverse cypher objects 
      //keybonded to its index partner in the given alphabet
          cypher[letter] = omega[index]
          reCypher[omega[index]] = letter
      })
    
      //switch to reverse cypher if decoding
      if (!encode) {cypher = reCypher}
      //Run through each input character in lowercase
      input = input.toLowerCase()
      //For each input character
      input.split('').forEach(input => {
          //add its keybonded value to the message
          message += input === ' ' ? ' ' : cypher[input]
      })
      return message
    }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
