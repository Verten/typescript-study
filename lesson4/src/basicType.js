// boolean
var isBoolean = true;
isBoolean = Boolean(0); // can not using new Boolean(0)
var isBooleanObject = new Boolean(1);
// number
var decLiteral = 6;
var hexliteral = 0xf00d;
// string
var _name = 'Tom';
var _age = '25';
var sentence = "My name is " + _name + ", \nand I am " + _age + " years old.";
// array
var _array = [1, 2, 3, 4];
var _array1 = [5, 6, 7, 8];
// Tuple
var _tuple = [25, 'Tom', [3, 4], [5, 6]];
_tuple[4] = 'next';
// Enum
var Color;
(function (Color) {
    Color[Color["RED"] = 2] = "RED";
    Color[Color["GREEN"] = 3] = "GREEN";
    Color[Color["BLUE"] = 4] = "BLUE";
})(Color || (Color = {}));
var c = Color.GREEN;
var colorName = Color[4];
console.info(c); // 3
console.info(colorName); // BLUE 
// void
function noReturn() {
    console.info('in onReturn function');
}
var unusable = null || undefined;
// null and undefined, 
// by default null and undefined are subtypes of all other types
// when using the --strictNullChecks flag, null and undefined are only assignable to void and their respective types
var n = null;
var u = undefined;
var _number = null || undefined;
// any
var notSure = 4;
notSure = 'string';
notSure = true;
//notSure.xxx()
var list = [1, true, 'false'];
list[50] = 0;
// never
function error(message) {
    throw new Error(message);
}
// object
function create(o) {
}
create({ props: '' });
// type assertions
var someValue = 'this is an test sentence';
var strLength = someValue.length;
var strLength1 = someValue.length;
function isNumber(x) {
    return typeof x === "number";
}
console.info(isNumber('11'));
