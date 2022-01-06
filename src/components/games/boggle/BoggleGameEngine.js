const validWordRegex = /^[a-z]+$/;

const BoggleGameEngine = {
  DEFAULT_CHAR: '?',
  MAX_BOARD_SIZE: 9,
  getPuzzleGrid(puzzle) {
    const puzzleRowStrs = puzzle.split('\n').slice(0, this.MAX_BOARD_SIZE);
    const numCols = Math.max(...puzzleRowStrs.map((s) => s.length));
    return puzzleRowStrs.map((rowStr) => {
      const normalizedRowStr = rowStr
        .padEnd(numCols, this.DEFAULT_CHAR)
        .slice(0, this.MAX_BOARD_SIZE);
      return {
        str: normalizedRowStr,
        arr: normalizedRowStr.split('')
      };
    });
  },
  isValidGame(puzzle) {
    return (
      puzzle?.length
      && this.getPuzzleGrid(puzzle).every((row) => (
        row
        && row.str
        && row.arr
        && row.str.length === row.arr.length
        && validWordRegex.test(row.str)
      ))
    );
  },
  getSolution: (wordList, puzzle) => {

  }
};

export default BoggleGameEngine;
