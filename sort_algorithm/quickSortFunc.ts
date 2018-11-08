import { initData } from './common'

export const quickSortFunc = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array
  }
  const left: number[] = [],
    right: number[] = []
  const middle = array.pop()
  array.forEach(element => {
    if (element <= middle) {
      left.push(element)
    } else {
      right.push(element)
    }
  })
  return quickSortFunc(left).concat(middle, quickSortFunc(right))
}

// const data = initData(100000)
// console.info(new Date())
// console.info('before quick sort: ', data)
// // quickSortFunc(data)
// console.info('after quick sort: ', quickSortFunc(data))
// console.info(new Date())
