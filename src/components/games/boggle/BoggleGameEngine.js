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

// A recursive function to traverse 8 adjacent cells of puzzleGrid[i,j]
const findWordsUtil = (wordSet, puzzleGrid, visited, i, j, str, foundWords) => {
  // eslint-disable-next-line no-param-reassign
  visited[i][j] = true;
  const newStr = str + puzzleGrid[i].arr[j];
  if (wordSet.has(newStr)) {
    foundWords.add(newStr);
  }
  for (let row = i - 1; row <= i + 1 && row < puzzleGrid.length; row++) {
    for (let col = j - 1; col <= j + 1 && col < puzzleGrid[0].arr.length; col++) {
      if (row >= 0 && col >= 0 && !visited[row][col]) {
        findWordsUtil(wordSet, puzzleGrid, visited, row, col, newStr, foundWords);
      }
    }
  }
  // eslint-disable-next-line no-param-reassign
  visited[i][j] = false;
};

export const getSolution = (wordList, puzzle) => {
  const wordSet = new Set(wordList.filter((word) => word.length >= MIN_WORD_LENGTH));
  const puzzleGrid = getPuzzleGrid(puzzle);
  const numRows = puzzleGrid.length;
  const numCols = puzzleGrid[0].arr.length;
  const visited = Array.from(Array(numRows), () => new Array(numCols).fill(0));
  const foundWords = new Set();
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      findWordsUtil(wordSet, puzzleGrid, visited, i, j, '', foundWords);
    }
  }
  return foundWords;
};
