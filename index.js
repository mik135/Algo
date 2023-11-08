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

