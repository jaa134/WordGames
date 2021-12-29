const validWordRegex = /^[a-z]+$/;

const WordLaddersGameEngine = {
  isValidGame: (w1, w2) => (
    w1
    && w2
    && w1.length === w2.length
    && validWordRegex.test(w1)
    && validWordRegex.test(w2)
  )
};

export default WordLaddersGameEngine;
