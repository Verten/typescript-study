function add(number1: number, number2: number): number {
  return number1 + number2
}

console.info(add(1, 5))

// normal defined
function addAndMultiply(num1: number, num2: number, callback: (input: number) => void): void {
  const result = num1 + num2
  callback(result)
}

// using type
type CallbackFunctionType = (input: number) => void
function addAndMultiply1(num1: number, num2: number, callback: CallbackFunctionType): void {
  const result = num1 + num2
  callback(result)
}

// using interface
interface CallbackFunction {
  (input: number): void
}
function addAndMultiply2(num1: number, num2: number, callback: CallbackFunction): void {
  const result = num1 + num2
  callback(result)
}
