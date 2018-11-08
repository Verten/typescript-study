import { initData, swap } from './common'

export const selectionSortFunc = (array: number[]): void => {
  const result: number[] = []
  for (let index = 0; index < array.length; index++) {
    let minIndex = index
    for (let j = index + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    swap(array, index, minIndex)
  }
}

// const data = initData(100000)
// console.info(new Date())
// //console.info('before selection sort: ', data)
// selectionSortFunc(data)
// //console.info('after selection sort: ', data)
// console.info(new Date())
