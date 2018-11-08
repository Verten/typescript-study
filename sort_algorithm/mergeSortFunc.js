"use strict";
exports.__esModule = true;
exports.mergeSortFunc = function (array) {
    if (array.length < 2) {
        return array;
    }
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    return merge(exports.mergeSortFunc(left), exports.mergeSortFunc(right));
};
var merge = function (left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] > right[0]) {
            result.push(right.shift());
        }
        else {
            result.push(left.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
};
// const data = initData(100000)
// console.info(new Date())
// mergeSortFunc(data)
// //console.info('before merge sort: ', data)
// //console.info('after merge sort: ', mergeSortFunc(data))
// console.info(new Date())
