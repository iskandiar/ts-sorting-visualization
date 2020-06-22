import createApp from './dom/createApp'
import createTable from './dom/createTable'
import createTableRow from './dom/createTableRow'
import createTableHeader from './dom/createTableHeader'
import createResultCell from './dom/createResultCell'
import './style.css';

import QuickSort from './algorithms/QuickSort'
import BubbleSort from './algorithms/BubbleSort'
import { randomArr, nearlySortedArr, reversedSortedArr, sortedArr } from './utils/random'

const DELAY = 50;

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

//Prepare sorting results
const results = samples.map(({name: sampleType, sample}) => {
  return sorts.map(({ name: sortType, klass }) => {
    const instance = new klass([...sample])
    instance.sort()

    return { instance, sortType, sampleType, sample }
  })
})

//render cell rows
const resultCellRows = results
  .map(rowResults => {
    const [templates, updates] = rowResults
      .map((result) => createResultCell(result.sample))
      .reduce(([templates, updates], [template, update]) => (
        [templates + template, [...updates, update]]
      ), ['', []]);

    return [templates, updates, rowResults];
  })

const handlePlayClick = ({ sortType, sampleType }): void => startDrawing({ sortType, sampleType })

const resultRows = resultCellRows.map(([template, , row]) => createTableRow(template, row, handlePlayClick))

const resultRowsTemplate = resultRows.map(([template]) => template).join('')
const resultRowsInit = resultRows.map(([, , init]) => init)

const [tableHeaderTemplate, , tableHeaderInit] = createTableHeader(sorts, handlePlayClick)

const [tableTemplate, , tableInit] = createTable(tableHeaderTemplate + resultRowsTemplate, [...resultRowsInit, tableHeaderInit])

createApp(tableTemplate, tableInit)

const snapshotLengths = results.map(elements => elements.map(el => el.instance.snapshots.length)).flat()
const maxIterations = Math.max.apply(null, snapshotLengths)

const flattenResults = results.flat().map((el, idx) => ({...el, idx}))

const flattenCellUpdates = resultCellRows.map(([,update]) => update).flat()

const draw = (iter = 0, results) => () => {
  if (iter < maxIterations) {
    results.forEach(({idx, instance}) => {
      if (instance.snapshots[iter] ) {
        const isLastIteration = iter === instance.snapshots.length - 1
        flattenCellUpdates[idx](instance.snapshots[iter], isLastIteration)
      }
    })

    setTimeout(() => {
      window.requestAnimationFrame(draw(iter + 1, results));
    }, DELAY)
  }
}

function startDrawing({ sortType, sampleType }) {
  // TO-DO handle cancel drawing
  const results = flattenResults.filter(result => {
    if (sortType) return result.sortType === sortType
    else if (sampleType) return result.sampleType === sampleType

    return true
  })

  requestAnimationFrame(draw(0, results))
}

// requestAnimationFrame(draw(0))

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


// TO-DO:
// - add more sorts
// - better styles
// - fix TS issues
// - pass size of test as query param + dynamic height of bar
// - 
// - 
// - 
// - 
