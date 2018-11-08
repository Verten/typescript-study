"use strict";
exports.__esModule = true;
exports.quickSortFunc = function (array) {
    if (array.length <= 1) {
        return array;
    }
    var left = [], right = [];
    var middle = array.pop();
    array.forEach(function (element) {
        if (element <= middle) {
            left.push(element);
        }
        else {
            right.push(element);
        }
    });
    return exports.quickSortFunc(left).concat(middle, exports.quickSortFunc(right));
};
// const data = initData(100000)
// console.info(new Date())
// console.info('before quick sort: ', data)
// // quickSortFunc(data)
// console.info('after quick sort: ', quickSortFunc(data))
// console.info(new Date())
