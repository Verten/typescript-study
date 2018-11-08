import { initData, swap } from './common'

export const insertionSortFunc = (array: number[]): void => {
  for (let index = 0; index < array.length; index++) {
    let currentNumber = array[index]
    let j = index
    for (; j > 0; j--) {
      if (currentNumber < array[j - 1]) {
        array[j] = array[j - 1]
      } else {
        break
      }
    }
    array[j] = currentNumber
  }
}

// const data = initData(100000)
// console.info(new Date())
// //console.info('before selection sort: ', data)
// insertionSortFunc(data)
// //console.info('after selection sort: ', data)
// console.info(new Date())
