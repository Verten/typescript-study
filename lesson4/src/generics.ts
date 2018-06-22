interface GenericsIdentity {
  <T>(arg: T): T
}

interface LengthWise {
  length: number
}

interface GenericsIdentityFunction<T, U extends keyof T> {
  (object: T, key: U): T[U]
}

function identity<T>(arg: T): T {
  return arg
}

function getValue<T, U extends keyof T>(object: T, key: U): T[U] {
  return object[key]
}

let output = identity('string')
let output1 = identity<boolean>(true)

let myIdentity: <T>(arg: T) => T = identity

let myIdentity1: GenericsIdentity = identity

let x = { a: 1, b: 2, c: 3, d: 4 }
let mygenericsFunction: GenericsIdentityFunction<any, any> = getValue
console.info(mygenericsFunction(x, 'd'))

function getLength<T extends LengthWise>(arg: T): T {
  console.info(arg.length)
  return arg
}

type Nullable<T> = { [P in keyof T]: T[P] | null }
function getNull(arg: Nullable<LengthWise>) {
  console.info(arg)
}
getNull({ length: 10 })

function getProperties(object: Pick<LengthWise, 'length'>) {
  console.info(object)
}
getProperties({ length: 10 })
