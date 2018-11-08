export const swap = (array: number[], originIndex: number, targetIndex: number): void => {
  let temp = array[originIndex]
  array[originIndex] = array[targetIndex]
  array[targetIndex] = temp
}

export const initData = (size: number): number[] => {
  const result: number[] = []
  for (let index = 0; index < size; index++) {
    result.push(Math.round(Math.random() * 100000))
  }
  return result
}
