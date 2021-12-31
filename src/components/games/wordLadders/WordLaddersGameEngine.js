const WordLaddersGameEngine = {
  validWordRegex: /^[a-z]+$/,
  isValidGame(w1, w2) {
    return (
      w1
      && w2
      && w1.length === w2.length
      && this.validWordRegex.test(w1)
      && this.validWordRegex.test(w2)
    );
  },
  __getSolutionFromTree(endWord, wordTree) {
    const result = [];
    let cur = endWord;
    while (cur in wordTree) {
      result.push(cur);
      cur = wordTree[cur];
    }
    return result.reverse();
  },
  getSolution(wordList, startWord, endWord, excludedWords) {
    const filteredList = wordList.filter((word) => word.length === startWord.length);
    const wordSet = new Set(filteredList);
    wordSet.delete(startWord);
    excludedWords.forEach((word) => { wordSet.delete(word); });
    const numWordsWithLength = wordSet.size;

    const wordTree = { [startWord]: null };
    let queue = [startWord];
    while (queue.length && queue.every((word) => word !== endWord)) {
      const nextQueue = [];
      // loop over each word in the queue
      for (let i = 0; i < queue.length; i++) {
        const word = queue[i];
        // loop over each char of the word
        for (let j = 0; j < word.length; j++) {
          // and replace the char with letters from [a - z]
          for (let k = 0; k < 26; k++) {
            const newWord = word.slice(0, j) + String.fromCharCode(k + 97) + word.slice(j + 1);
            // if the new word exist in the word list, then add it to the queue for processing,
            // keep track of how we got to this word in our tree structure, and remove
            // the new word from our set so we dont encounter it again
            if (wordSet.has(newWord)) {
              nextQueue.push(newWord);
              wordTree[newWord] = word;
              wordSet.delete(newWord);
            }
          }
        }
      }
      queue = nextQueue;
    }

    return {
      numWordsWithLength,
      numWordsUsed: Object.keys(wordTree).length,
      solution: this.__getSolutionFromTree(endWord, wordTree)
    };
  }
};

export default WordLaddersGameEngine;
