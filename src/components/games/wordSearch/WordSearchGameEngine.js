import trie from '../../../utils/trie';

const validWordRegex = /^[a-z]+$/;

export const EMPTY_GAME_CHAR = '?';
export const MAX_BOARD_SIZE = 20;
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

const DIRS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
];

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

  // A function to traverse all 8 directions starting from puzzleGrid[i,j]
  const foundWords = {};
  const findWordsUtil = (i, j) => {
    DIRS.forEach(([rowDir, colDir]) => {
      let row = i;
      let col = j;
      let word = '';
      const path = [];
      do {
        word += puzzleGrid[row].arr[col];
        path.push({ row, col });
        if (!(word in foundWords) && trie.containsWord(word)) {
          foundWords[word] = [...path];
        }
        row += rowDir;
        col += colDir;
      } while (
        row >= 0
        && col >= 0
        && row < numPuzzleRows
        && col < numPuzzleCols
        && trie.isValidPrefix(word)
      );
    });
  };

  puzzleGrid.forEach((row, i) => {
    row.arr.forEach((_, j) => {
      findWordsUtil(i, j);
    });
  });

  return foundWords;
};
