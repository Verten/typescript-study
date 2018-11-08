"use strict";
exports.__esModule = true;
exports.insertionSortFunc = function (array) {
    for (var index = 0; index < array.length; index++) {
        var currentNumber = array[index];
        var j = index;
        for (; j > 0; j--) {
            if (currentNumber < array[j - 1]) {
                array[j] = array[j - 1];
            }
            else {
                break;
            }
        }
        array[j] = currentNumber;
    }
};
// const data = initData(100000)
// console.info(new Date())
// //console.info('before selection sort: ', data)
// insertionSortFunc(data)
// //console.info('after selection sort: ', data)
// console.info(new Date())
