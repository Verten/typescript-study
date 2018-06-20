class Student{
  fullName: string
  constructor(public firstName: string, public middleInitial: string, public lastName: string){
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

interface Person{
  firstName: string
  lastName: string
}

function greeter(person: Person){
  console.info('Hello ' + person.firstName + ' ' + person.lastName)
}

let user1 = new Student('Bin', 'A','Hong')

greeter(user1)