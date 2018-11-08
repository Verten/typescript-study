import { initData } from './common'

export const mergeSortFunc = (array: number[]): number[] => {
  if (array.length < 2) {
    return array
  }
  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  return merge(mergeSortFunc(left), mergeSortFunc(right))
}

const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = []
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

// const data = initData(100000)
// console.info(new Date())
// mergeSortFunc(data)
// //console.info('before merge sort: ', data)
// //console.info('after merge sort: ', mergeSortFunc(data))
// console.info(new Date())
