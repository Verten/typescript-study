var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
function hello(person) {
    console.info("Hello " + person.name + ", you are " + Gender[person.gender]);
    return {
        name: person.name,
        gender: person.gender,
    };
}
var user = { age: 25, name: 'Tom', gender: Gender.MALE };
hello(user);
var point = { x: 1.0, y: 2.0 };
var readonlyArray = ['a', 'b', 'c'];
var a = readonlyArray;
var mySearch = function (source, subString) {
    return source.search(subString) > -1;
};
console.info(mySearch('Hello, my name is Tom', 'name is Tom'));
var myArray;
myArray = { name: 'Fred' };
var myStr = myArray['name'];
var readonlyMyArray = ['Bob', 'Tom', 'Fred'];
