"use strict";
exports.__esModule = true;
var common_1 = require("./common");
exports.bubbleSortFunc = function (array) {
    for (var index = array.length - 1; index > 0; index--) {
        var swapFlag = false;
        for (var j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                swapFlag = true;
                common_1.swap(array, j, j + 1);
            }
        }
        if (!swapFlag) {
            return;
        }
    }
};
// const data = initData(100)
// console.info(new Date())
// console.info('before bubble sort: ', data)
// bubbleSortFunc(data)
// console.info('after bubble sort: ', data)
// console.info(new Date())
