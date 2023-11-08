let string = prompt("Enter a Sentence That Ends With Fullstop.");

alert(`\nThe Length of the Sentence is: ${sen(string).len()}\n
The Number of Words in the Sentence is: ${sen(string).numWord()}\n
The Number of Vowels in the Sentence is: ${sen(string).numVowel()}`);



function sen(string) {
  return {
    len: function() {
      let strLen = string.length;
      return strLen;
    },
    numWord: function() {
      let wordCount = 0;
      for (let char of string) {
        if (char === " ") {
          wordCount++;
        }
      }
      return wordCount + 1;
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
      return vowelCount;
    }
  };
}

// const atau = sen("Atau is a man");

// console.log(atau.numVowel());
