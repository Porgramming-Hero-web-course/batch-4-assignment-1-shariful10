"use strict";
function countWordOccurrences(sentence, word) {
    const regex = new RegExp(word, "gi");
    const matches = sentence.match(regex);
    return matches ? matches.length : 0;
}
const result = countWordOccurrences("I love typescript", "typescript");
console.log(result);
