import App from './dom/App'
import createTable from './dom/createTable'
import createTableRow from './dom/createTableRow'
import createTableHeader from './dom/createTableHeader'
import { updateResultCell } from './dom/createResultCell'
import './style.css';

import QuickSort from './algorithms/QuickSort'
import BubbleSort from './algorithms/BubbleSort'
import { randomArr, uuidv4, nearlySortedArr, reversedSortedArr, sortedArr } from './utils/random'

const sorts = [
  { name: 'Quick Sort', klass: QuickSort },
  { name: 'Bubble Sort', klass: BubbleSort },
]

const samples = [
  { name: 'Random', sample: randomArr()},
  { name: 'Nearly Sorted', sample: nearlySortedArr()},
  { name: 'Reversed', sample: reversedSortedArr()},
  { name: 'Sorted', sample: sortedArr()},
]

const results = samples.map(({name: sortName, sample}) => {
  return sorts.map(({name, klass: Sort}) => {
    const sortInstance = new Sort([...sample])
    sortInstance.sort()

    return { instance: sortInstance, uuid: uuidv4(), sortName, algorithmName: name, sample }
  })
})

const resultRows = results.map(rowResults => createTableRow(rowResults))

const resultRowsTemplate = resultRows.map(([template]) => template).join('')

const [tableHeaderTemplate] = createTableHeader(sorts)

const [tableTemplate] = createTable(tableHeaderTemplate + resultRowsTemplate)

App.render(tableTemplate)

const snapshotLengths = results.map(elements => elements.map(el => el.instance.snapshots.length)).flat()
const maxIterations = Math.max.apply(null, snapshotLengths)

const flattenResults = results.flat()

const draw = (iter = 0) => () => {
  if (iter < maxIterations) {
    flattenResults.forEach(({instance, uuid}) => {
      if (instance.snapshots[iter] ) {
        updateResultCell(instance.snapshots[iter].arr, uuid)
      }
    })

    setTimeout(() => {
      window.requestAnimationFrame(draw(iter + 1));
    }, 50)
  }
}

requestAnimationFrame(draw(0))

// https://www.improgrammer.net/sorting-algorithms-visualized/
// https://www.toptal.com/developers/sorting-algorithms

// Sorting algorithms:
// selection sort
// bubble sort
// insertion sort
// shell sort
// quick sort
// merge sort
// tree sort

// types:
// - random
// - worse
// - nearly sorted
// - reversed

