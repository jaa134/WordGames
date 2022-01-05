const MIN_WORD_LENGTH = 4;

const SpellingBeeGameEngine = {
  isGameValid: (defaultChar, requiredChar, optionalChars) => (
    requiredChar && optionalChars.every((letter) => !!letter && letter !== defaultChar)
  ),
  getMatches: (words, requiredChar, optionalChars) => {
    const allChars = requiredChar + optionalChars.join('');
    const regex = new RegExp(`^[${allChars}]*${requiredChar}[${allChars}]*$`, 'i');
    return words.filter((word) => (
      word.length >= MIN_WORD_LENGTH && regex.test(word)
    ));
  },
  calcPoints: (word, numUniqGameChars) => {
    let result;
    if (word.length < MIN_WORD_LENGTH) {
      // less than 4 letters = 0pts
      result = 0;
    } else if (word.length === MIN_WORD_LENGTH) {
      // 4 letters = 1pt
      result = 1;
    } else if (word.length > MIN_WORD_LENGTH) {
      // 5+ letters = 1pt per letter
      result = word.length;
      if (word.length >= numUniqGameChars) {
        const isPangram = new Set(word.split('')).size === numUniqGameChars;
        if (isPangram) {
          // pangram -> use all seven given letters in one-word = extra 7pts
          result += 7;
        }
      }
    }
    return result;
  }
};

export default SpellingBeeGameEngine;
