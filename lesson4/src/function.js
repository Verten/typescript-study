function add(number1, number2) {
    return number1 + number2;
}
console.info(add(1, 5));
// normal defined
function addAndMultiply(num1, num2, callback) {
    var result = num1 + num2;
    callback(result);
}
function addAndMultiply1(num1, num2, callback) {
    var result = num1 + num2;
    callback(result);
}
function addAndMultiply2(num1, num2, callback) {
    var result = num1 + num2;
    callback(result);
}
