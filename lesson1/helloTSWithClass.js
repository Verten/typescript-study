var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    console.info('Hello ' + person.firstName + ' ' + person.lastName);
}
var user1 = new Student('Bin', 'A', 'Hong');
greeter(user1);
