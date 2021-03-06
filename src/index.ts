import './style.css';

import renderApp from './renderApp'

import QuickSort from './algorithms/QuickSort'
import BubbleSort from './algorithms/BubbleSort'
import InsertionSort from './algorithms/InsertionSort'
import { randomArr, nearlySortedArr, reversedSortedArr, sortedArr } from './utils/random'
import { prepareResults, getMaxIterations, getFlattenResults, resetResults, updateResults } from './utils/results'
import { uuidv4 } from './utils/random';

const DELAY = 50;

const sorts = [
  { name: 'Quick Sort', klass: QuickSort },
  { name: 'Bubble Sort', klass: BubbleSort },
  { name: 'Insertion Sort', klass: InsertionSort },
]

const samples = [
  { name: 'Random', sample: randomArr()},
  { name: 'Nearly Sorted', sample: nearlySortedArr()},
  { name: 'Reversed', sample: reversedSortedArr()},
  { name: 'Sorted', sample: sortedArr()},
]

//Prepare sorting results
const results = prepareResults(sorts, samples)

const maxIterations = getMaxIterations(results)
const flattenResults = getFlattenResults(results)

const { updateResultCell } = renderApp(results, sorts, startDrawing)

let currentDrawId = null;

const draw = (iter = 0, results, id) => () => {
  if(id != currentDrawId) return
  if (iter < maxIterations) {
    updateResults(results, iter, updateResultCell)

    setTimeout(() => {
      window.requestAnimationFrame(draw(iter + 1, results, id));
    }, DELAY)
  }
}

function startDrawing({ sortType, sampleType }) {
  resetResults(flattenResults, updateResultCell)

  const results = flattenResults.filter(result => {
    if (sortType) return result.sortType === sortType
    else if (sampleType) return result.sampleType === sampleType

    return true
  })

  currentDrawId = uuidv4()

  requestAnimationFrame(draw(0, results, currentDrawId))
}
