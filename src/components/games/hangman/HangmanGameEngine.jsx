import { orderBy } from 'lodash';

export const WILDCARD_CHAR = '_';
export const gameChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const validPuzzleCharsRegex = new RegExp(`^[a-z${WILDCARD_CHAR}]+$`);
export const invalidPuzzleCharsRegex = new RegExp(`[^a-z${WILDCARD_CHAR}]`);
export const invalidLetterCharsRegex = /[^a-z]/;

const normalizeValue = (value, charsToRemove, allowDuplicates) => {
  let result = value.toLowerCase().replace(charsToRemove, '');
  if (!allowDuplicates) {
    const usedChars = {};
    result = result
      .split('')
      .filter((char) => {
        const isUsed = char in usedChars;
        usedChars[char] = true;
        return !isUsed;
      })
      .join('');
  }
  return result;
};

export const normalizePuzzle = (value) => (
  normalizeValue(value, invalidPuzzleCharsRegex, true)
);

export const normalizeLetters = (value) => (
  normalizeValue(value, invalidLetterCharsRegex, false)
);

export const isValidGame = (puzzle, incorrectLetters) => {
  const incorrectLetterSet = new Set(incorrectLetters);
  return (
    puzzle?.length
    && puzzle.includes(WILDCARD_CHAR)
    && validPuzzleCharsRegex.test(puzzle)
    && [...new Set(puzzle.replace(invalidLetterCharsRegex, ''))]
      .every((letter) => !incorrectLetterSet.has(letter))
  );
};

const getCorrectChars = (puzzle) => (
  puzzle.replace(invalidLetterCharsRegex, '')
);

const getGuessedLetters = (puzzle, incorrectLetters) => (
  new Set(getCorrectChars(puzzle) + incorrectLetters)
);

const getWordsWithLength = (wordList, length) => (
  wordList.filter((word) => word.length === length)
);

const getLettersByWord = (wordList) => (
  wordList.reduce((acc, val) => {
    acc[val] = [...new Set(val)];
    return acc;
  }, {})
);

const getWordsNotUsingIncorrectLetters = (wordList, lettersByWord, incorrectLetters) => {
  const letterSet = new Set(incorrectLetters);
  return wordList.filter((word) => (
    lettersByWord[word].every((letter) => !letterSet.has(letter))
  ));
};

const getWordsMatchingPuzzlePattern = (wordList, puzzle) => {
  const correctChars = new Set(getCorrectChars(puzzle));
  return wordList.filter((word) => (
    word.split('').every((letter, i) => {
      const puzzleChar = puzzle.charAt(i);
      return puzzleChar === WILDCARD_CHAR
        ? !correctChars.has(letter)
        : puzzleChar === letter;
    })
  ));
};

const getWordsByLetter = (wordList, lettersByWord) => {
  const result = gameChars.reduce((acc, val) => {
    acc[val] = new Set();
    return acc;
  }, {});
  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];
    lettersByWord[word].forEach((letter) => {
      result[letter].add(word);
    });
  }
  return result;
};

const getWordsWithLetters = (wordList, wordsByLetter, letters) => (
  wordList.filter((word) => (
    letters.every((letter) => (
      wordsByLetter[letter].has(word)
    ))
  ))
);

// TODO: use lettersByWord in getWordsMatchingPuzzlePattern
// TODO: better manage letters in play - use set?
// TODO: multiple passes
// TODO: multi spacing analysis

export const getSolution = (wordList, puzzle, incorrectLetters) => {
  const guessedLetters = getGuessedLetters(puzzle, incorrectLetters);
  const lettersInPlay = gameChars.filter((letter) => !guessedLetters.has(letter));

  let possibleWords = getWordsWithLength(wordList);
  possibleWords = getWordsMatchingPuzzlePattern(wordList, puzzle);
  const lettersByWord = getLettersByWord(possibleWords);
  possibleWords = getWordsNotUsingIncorrectLetters(possibleWords, lettersByWord, incorrectLetters);
  const wordsByLetter = getWordsByLetter(possibleWords, lettersByWord);

  // pass 1
  const result = lettersInPlay.map((letter1) => {
    const wordsWithLetters1 = getWordsWithLetters(possibleWords, wordsByLetter, [letter1]);
    const numWordsWithLetter1 = wordsWithLetters1.length;
    const appearenceRatio1 = numWordsWithLetter1 / possibleWords.length;

    /*
    TODO
    This is super slow, O(n^3) complexity. Maybe only calc 
    this for the first 3 most frequent letters.

    // pass 2
    const subsequentResults1 = {};
    lettersInPlay
      .filter((letter2) => letter1 !== letter2)
      .forEach((letter2) => {
        const wordsWithLetters2 = getWordsWithLetters(wordsWithLetters1, wordsByLetter, [letter1, letter2]);
        const numWordsWithLetter2 = wordsWithLetters2.length;
        const appearenceRatio2 = numWordsWithLetter2 / wordsWithLetters1.length;
        subsequentResults1[letter2] = {
          numWordsWithLetter: numWordsWithLetter2,
          appearenceRatio: appearenceRatio2
        };
        // pass 3
        const subsequentResults2 = {};
        lettersInPlay
          .filter((letter3) => letter1 !== letter2)
          .forEach((letter3) => {
            const wordsWithLetters3 = getWordsWithLetters(wordsWithLetters2, wordsByLetter, [letter1, letter2, letter3]);
            const numWordsWithLetter3 = wordsWithLetters3.length;
            const appearenceRatio3 = numWordsWithLetter3 / wordsWithLetters2.length;
            subsequentResults2[letter3] = {
              numWordsWithLetter: numWordsWithLetter3,
              appearenceRatio: appearenceRatio3
            };
          });
      });
    */

    return {
      letter: letter1,
      numWordsWithLetter: numWordsWithLetter1,
      appearenceRatio: appearenceRatio1
    };
  });

  return orderBy(result, (data) => data.appearenceRatio, 'desc');
};
