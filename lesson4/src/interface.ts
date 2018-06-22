enum Gender {
  MALE,
  FEMALE,
}
interface Person {
  name: string
  gender?: Gender
}

function hello(person: Person): { name: string; gender: Gender } {
  console.info(`Hello ${person.name}, you are ${Gender[person.gender]}`)
  return {
    name: person.name,
    gender: person.gender,
  }
}

let user = { age: 25, name: 'Tom', gender: Gender.MALE }

hello(user)

/**-------------------------------------------------------------------------------- */
// readonly properties
interface Point {
  readonly x: number
  readonly y: number
}

let point: Point = { x: 1.0, y: 2.0 }

let readonlyArray: ReadonlyArray<string> = ['a', 'b', 'c']
let a = readonlyArray as string[]

//
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch = function(source: string, subString: string) {
  return source.search(subString) > -1
}

console.info(mySearch('Hello, my name is Tom', 'name is Tom'))

//
interface StringArray {
  [index: string]: string
}

let myArray: StringArray
myArray = { name: 'Fred' }
let myStr: string = myArray['name']

interface ReadonlyMyArray {
  readonly [index: number]: string
}
let readonlyMyArray: ReadonlyMyArray = ['Bob', 'Tom', 'Fred']

