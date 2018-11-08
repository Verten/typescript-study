import { initData, swap } from './common'

export const bubbleSortFunc = (array: number[]): void => {
  for (let index = array.length - 1; index > 0; index--) {
    let swapFlag: boolean = false
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swapFlag = true
        swap(array, j, j + 1)
      }
    }
    if (!swapFlag) {
      return
    }
  }
}

// const data = initData(100)
// console.info(new Date())
// console.info('before bubble sort: ', data)
// bubbleSortFunc(data)
// console.info('after bubble sort: ', data)
// console.info(new Date())
