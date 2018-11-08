"use strict";
exports.__esModule = true;
exports.swap = function (array, originIndex, targetIndex) {
    var temp = array[originIndex];
    array[originIndex] = array[targetIndex];
    array[targetIndex] = temp;
};
exports.initData = function (size) {
    var result = [];
    for (var index = 0; index < size; index++) {
        result.push(Math.round(Math.random() * 100000));
    }
    return result;
};
