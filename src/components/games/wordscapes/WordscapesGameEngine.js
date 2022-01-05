const MIN_WORD_LENGTH = 3;
const MAX_WORD_LENGTH = 7;

const invalidLetterCharsRegex = /[^a-z]/;

const WordscapesGameEngine = {
  getDisplayPuzzle: (puzzle) => (
    puzzle.padEnd(MIN_WORD_LENGTH, '?')
  ),
  normalizePuzzle: (value) => (
    value.toLowerCase().replace(invalidLetterCharsRegex, '').substring(0, MAX_WORD_LENGTH)
  ),
  isGameValid: (puzzle) => (
    puzzle
    && puzzle.length >= MIN_WORD_LENGTH
    && puzzle.length <= MAX_WORD_LENGTH
  ),
  getMatches: (words, puzzle) => {
    const puzzleLetterCounts = puzzle
      .split('')
      .reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
      }, {});

    return words
      .filter((word) => (
        word.length >= MIN_WORD_LENGTH
        && puzzle.length <= MAX_WORD_LENGTH
      ))
      .filter((word) => {
        const wordLetterCounts = {};
        return word.split('').every((letter) => {
          wordLetterCounts[letter] = (wordLetterCounts[letter] || 0) + 1;
          return letter in puzzleLetterCounts
            && wordLetterCounts[letter] <= puzzleLetterCounts[letter];
        });
      });
  }
};

export default WordscapesGameEngine;
