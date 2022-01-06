export default (() => {
  const trie = {};

  return {
    get() {
      return trie;
    },

    add(word) {
      if (!word) {
        return;
      }
      let currentNode = trie;
      word.toLowerCase().split('').forEach((letter, index) => {
        if (!currentNode[letter]) {
          currentNode[letter] = {};
        }
        currentNode = currentNode[letter];
        if (index === word.length - 1) {
          currentNode.$ = 1;
        }
      });
    },

    containsWord(word) {
      if (!word) {
        return false;
      }
      let currentNode = trie;
      return word.split('').every((letter, index) => {
        if (!currentNode[letter]) {
          return false;
        }
        currentNode = currentNode[letter];
        if (index === word.length - 1) {
          return currentNode.$ === 1;
        }
        return letter;
      });
    },

    isValidPrefix(prefix) {
      let currentNode = trie;
      return prefix.split('').every((letter) => {
        if (!currentNode[letter]) {
          return false;
        }
        currentNode = currentNode[letter];
        return true;
      });
    }
  };
})();
