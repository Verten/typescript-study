// boolean
let isBoolean: boolean = true

isBoolean = Boolean(0) // can not using new Boolean(0)

let isBooleanObject: Boolean = new Boolean(1)

// number
let decLiteral: number = 6
let hexliteral: number = 0xf00d

// string
let _name: string = 'Tom'
let _age: string = '25'

let sentence: string = `My name is ${_name}, 
and I am ${_age} years old.`

// array
let _array: number[] = [1, 2, 3, 4]
let _array1: Array<number> = [5, 6, 7, 8]

// Tuple
let _tuple: [number, string, Array<number>, number[]] = [25, 'Tom', [3, 4], [5, 6]]
_tuple[4] = 'next'

// Enum
enum Color {RED = 2, GREEN, BLUE}
let c: Color = Color.GREEN
let colorName: string = Color[4]
console.info(c) // 3
console.info(colorName) // BLUE 

// void

function noReturn(): void {
  console.info('in onReturn function')
}
let unusable: void = null || undefined

// null and undefined, 
// by default null and undefined are subtypes of all other types
// when using the --strictNullChecks flag, null and undefined are only assignable to void and their respective types
let n: null = null
let u: undefined = undefined
let _number: number = null || undefined

// any
let notSure: any = 4
notSure = 'string'
notSure = true
//notSure.xxx()

let list: any[] = [1, true, 'false']
list[50] = 0

// never
function error(message: string): never{
  throw new Error(message)
}

// object
function create(o: object | null): void{

}
create({props: ''})

// type assertions
let someValue: any = 'this is an test sentence'
let strLength: number = (someValue as string).length
let strLength1: number = (<string>someValue).length


function isNumber(x: any): x is number {
  return typeof x === "number";
}

console.info(isNumber('11'))