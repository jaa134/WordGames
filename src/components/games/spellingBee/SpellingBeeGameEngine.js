const MIN_WORD_LENGTH = 4;

const SpellingBeeGameEngine = {
  getMatches: (words, requiredChar, optionalChars) => {
    const allChars = requiredChar + optionalChars.join('');
    const regex = new RegExp(`^[${allChars}]*${requiredChar}[${allChars}]*$`, 'i');
    const result = [];
    words.forEach((word) => {
      if (word.length >= MIN_WORD_LENGTH && regex.test(word)) {
        result.push(word);
      }
    });
    return result;
  }
};

export default SpellingBeeGameEngine;
