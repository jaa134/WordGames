import trie from '../../../utils/trie';

const validWordRegex = /^[a-z]+$/;

export const EMPTY_GAME_CHAR = '?';
export const MAX_BOARD_SIZE = 9;
const MIN_WORD_LENGTH = 3;

export const getPuzzleGrid = (puzzle) => {
  const puzzleRowStrs = puzzle.split('\n').slice(0, MAX_BOARD_SIZE);
  const numCols = Math.max(...puzzleRowStrs.map((s) => s.length));
  return puzzleRowStrs.map((rowStr) => {
    const normalizedRowStr = rowStr
      .padEnd(numCols, EMPTY_GAME_CHAR)
      .slice(0, MAX_BOARD_SIZE);
    return {
      str: normalizedRowStr,
      arr: normalizedRowStr.split('')
    };
  });
};

export const isValidGame = (puzzle) => (
  puzzle?.length
    && getPuzzleGrid(puzzle).every((row) => (
      row
      && row.str
      && row.arr
      && row.str.length === row.arr.length
      && validWordRegex.test(row.str)
    ))
);

export const getSolution = (wordList, puzzle) => {
  const puzzleGrid = getPuzzleGrid(puzzle);
  const numPuzzleRows = puzzleGrid.length;
  const numPuzzleCols = puzzleGrid[0].arr.length;
  const puzzleLetters = new Set(puzzle);

  const possibleWords = wordList.filter((word) => (
    word.length >= MIN_WORD_LENGTH
    && word.split('').every((letter) => puzzleLetters.has(letter))
  ));
  possibleWords.forEach((word) => {
    trie.add(word);
  });

  // A recursive function to traverse 8 adjacent cells of puzzleGrid[i,j]
  const foundWords = {};
  const path = [];
  const visited = Array.from(Array(numPuzzleRows), () => new Array(numPuzzleCols).fill(0));
  const findWordsUtil = (currentWord, i, j) => {
    path.push({ row: i, col: j });
    visited[i][j] = true;
    if (trie.containsWord(currentWord)) {
      foundWords[currentWord] = [...path];
    }
    for (let row = i - 1; row <= i + 1 && row < numPuzzleRows; row++) {
      for (let col = j - 1; col <= j + 1 && col < numPuzzleCols; col++) {
        if (row >= 0 && col >= 0 && !visited[row][col]) {
          const nextWord = currentWord + puzzleGrid[row].arr[col];
          if (trie.isValidPrefix(nextWord)) {
            findWordsUtil(nextWord, row, col);
          }
        }
      }
    }
    path.pop();
    visited[i][j] = false;
  };

  puzzleGrid.forEach((row, i) => {
    row.arr.forEach((col, j) => {
      findWordsUtil(col[j], i, j);
    });
  });

  return foundWords;
};
