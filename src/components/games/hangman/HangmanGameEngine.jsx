import { orderBy } from 'lodash';
import commonWords from '../../../assets/json/commonWords.json';

const NUM_COMMON_WORDS = 10;
const NUM_REGULAR_WORDS = 5;
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

const getLettersByWord = (wordList) => (
  wordList.reduce((acc, val) => {
    acc[val] = [...new Set(val)];
    return acc;
  }, {})
);

const getWordsMatchingPuzzle = (wordList, puzzle, incorrectLetters) => {
  const incorrectChars = new Set(incorrectLetters);
  const correctChars = new Set(getCorrectChars(puzzle));
  return wordList.filter((word) => (
    word.length === puzzle.length
    && word.split('').every((letter, i) => {
      const puzzleChar = puzzle.charAt(i);
      return !incorrectChars.has(letter)
        && puzzleChar === WILDCARD_CHAR
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
  wordList.forEach((word) => {
    lettersByWord[word].forEach((letter) => {
      result[letter].add(word);
    });
  });
  return result;
};

const getWordsWithLetters = (wordList, wordsByLetter, letters) => (
  wordList.filter((word) => (
    letters.every((letter) => (
      wordsByLetter[letter].has(word)
    ))
  ))
);

const getCommonWordsMatchingPuzzle = (wordsMatchingPuzzle) => {
  const wordsMatchingPuzzleSet = new Set(wordsMatchingPuzzle);
  const result = [];
  let i = 0;
  while (i < wordsMatchingPuzzle.length && result.length < NUM_COMMON_WORDS) {
    if (wordsMatchingPuzzleSet.has(commonWords[i])) {
      result.push(commonWords[i]);
    }
    i++;
  }
  return result;
};

export const getSolution = (wordList, puzzle, incorrectLetters) => {
  const possibleWords = getWordsMatchingPuzzle(wordList, puzzle, incorrectLetters);
  const numPossibleWords = possibleWords.length;
  const commonExamples = getCommonWordsMatchingPuzzle(possibleWords);

  let letterAnalysis = null;
  if (possibleWords.length) {
    const lettersByWord = getLettersByWord(possibleWords);
    const wordsByLetter = getWordsByLetter(possibleWords, lettersByWord);
    const guessedLetters = getGuessedLetters(puzzle, incorrectLetters);
    const lettersInPlay = gameChars.filter((letter) => !guessedLetters.has(letter));
    letterAnalysis = lettersInPlay.map((letter) => {
      const wordsWithLetters = getWordsWithLetters(possibleWords, wordsByLetter, [letter]);
      const numWordsWithLetter = wordsWithLetters.length;
      const appearenceRatio = numWordsWithLetter / numPossibleWords;
      const examples = wordsWithLetters.slice(0, NUM_REGULAR_WORDS);
      return {
        letter,
        numWordsWithLetter,
        appearenceRatio,
        examples
      };
    });
    letterAnalysis = orderBy(letterAnalysis, (data) => data.appearenceRatio, 'desc');
  }

  return {
    numWordsExamined: wordList.length,
    numPossibleWords,
    commonExamples,
    letterAnalysis
  };
};
