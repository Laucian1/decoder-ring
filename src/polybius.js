// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const cypher= { "a":"11", "b":"21", "c":"31", "d":"41", "e":"51", " ":" ",
                "f":"12", "g":"22", "h":"32", "i":"42", "j":"42", "k":"52",
                "l":"13", "m":"23", "n":"33", "o":"43", "p":"53",
                "q":"14", "r":"24", "s":"34", "t":"44", "u":"54",
                "v":"15", "w":"25", "x":"35", "y":"45", "z":"55"
              }

  const reCypher= { 11:"a", 21:"b", 31:"c", 41:"d",     51:"e",
                  12:"f", 22:"g", 32:"h", 42:"(i/j)", 52:"k",
                  13:"l", 23:"m", 33:"n", 43:"o",     53:"p",
                  14:"q", 24:"r", 34:"s", 44:"t",     54:"u",
                  15:"v", 25:"w", 35:"x", 45:"y",     55:"z",
                  " ":" "
                }              

  function polybius(input, encode = true) {
    //If we are decoding
    if (!encode) {
      //Split the string by the spaces and rejoin without to test even length
      if (input.split(" ").join('').length % 2 !== 0) {
          return false
      }
      //return letter matched to number pairs while retaining spaces
      return input.match(/[1-5]{2}|\s/g).map(number => {
        return reCypher[number]
    }).join('')
    }
    //split and map the input to find the number pair matched
    return input.split('').map((letter) => {
      return cypher[letter.toLowerCase()]
    }).join('')
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
