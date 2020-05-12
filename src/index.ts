import App from './dom/App'
import TableCell from './dom/TableCell'
import TableHeader from './dom/TableHeader'

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

const ExamplesArray = results.map(row => {
  return `
    <div style="display: flex;">
      ${[{ name: row[0].sortName }, ...row].map(({ name, uuid, sample }) => {
        if (name) return TableCell.renderName(name)

        return TableCell.init(sample, uuid)
      }).join('')}
    </div>
  `
}).join('')

// const element = document.createElement('div');
// element.innerHTML = `
//   <div style="max-width: 900px; margin: 0 auto;">
//     ${ExamplesArray}
//   </div>
// `

// document.body.appendChild(element)

const tableHeader = TableHeader.render(sorts)

App.render(tableHeader + ExamplesArray)

const snapshotLengths = results.map(elements => elements.map(el => el.instance.snapshots.length)).flat()
const maxIterations = Math.max.apply(null, snapshotLengths)

const flattenResults = results.flat()

const draw = (iter = 0) => () => {
  if (iter < maxIterations) {
    flattenResults.forEach(({instance, uuid}) => {
      if (instance.snapshots[iter] ) {
        TableCell.render(instance.snapshots[iter].arr, uuid)
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
