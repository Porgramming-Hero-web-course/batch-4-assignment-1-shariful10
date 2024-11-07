"use strict";
function removeDuplicates(numbers) {
    return numbers.filter((number, index) => numbers.indexOf(number) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
