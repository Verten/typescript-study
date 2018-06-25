function identity(arg) {
    return arg;
}
function getValue(object, key) {
    return object[key];
}
var output = identity('string');
var output1 = identity(true);
var myIdentity = identity;
var myIdentity1 = identity;
var x = { a: 1, b: 2, c: 3, d: 4 };
var mygenericsFunction = getValue;
console.info(mygenericsFunction(x, 'd'));
function getLength(arg) {
    console.info(arg.length);
    return arg;
}
function getNull(arg) {
    console.info(arg);
}
getNull({ length: 10 });
function getProperties(object) {
    console.info(object);
}
getProperties({ length: 10 });
