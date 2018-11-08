import { initData } from './common'
import { selectionSortFunc } from './selectionSortFunc'
import { insertionSortFunc } from './insertionSortFunc'
import { bubbleSortFunc } from './bubbleSortFunc'
import { mergeSortFunc } from './mergeSortFunc'
import { quickSortFunc } from './quickSortFunc'

const data = initData(100000)
console.info('start selection sort -> ', new Date())
selectionSortFunc([...data])
console.info('end selection sort -> ', new Date())

console.info('----------------------------------------------------------------')

console.info('start insertion sort -> ', new Date())
insertionSortFunc([...data])
console.info('end insertion sort -> ', new Date())

console.info('----------------------------------------------------------------')

console.info('start bubble sort -> ', new Date())
bubbleSortFunc([...data])
console.info('end bubble sort -> ', new Date())

console.info('----------------------------------------------------------------')

console.info('start merge sort -> ', new Date())
mergeSortFunc([...data])
console.info('end merge sort -> ', new Date())

console.info('----------------------------------------------------------------')

console.info('start quick sort -> ', new Date())
quickSortFunc([...data])
console.info('end quick sort -> ', new Date())
