function sen(string) {
  return {
    len: function() {
      let strLen = string.length;
      return "The length is: " + strLen;
    },
    numWord: function() {
      let wordCount = 0;
      for (let char of string) {
        if (char === " ") {
          wordCount++;
        }
      }
      return `The number of words is: ${wordCount + 1}`;
    },
    numVowel: function() {
      let vowelCount = 0;
      for (let char of string.toLowerCase()) {
        if (
          char == "a" ||
          char == "e" ||
          char == "i" ||
          char == "o" ||
          char == "u"
        ) {
          vowelCount++;
        }
      }
      return "The number of vowels is: " + vowelCount;
    }
  };
}

const atau = sen("Atau is a man");

console.log(atau.numVowel());
