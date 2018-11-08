"use strict";
exports.__esModule = true;
var common_1 = require("./common");
exports.selectionSortFunc = function (array) {
    var result = [];
    for (var index = 0; index < array.length; index++) {
        var minIndex = index;
        for (var j = index + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        common_1.swap(array, index, minIndex);
    }
};
// const data = initData(100000)
// console.info(new Date())
// //console.info('before selection sort: ', data)
// selectionSortFunc(data)
// //console.info('after selection sort: ', data)
// console.info(new Date())
