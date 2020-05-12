import ArrayCell from './dom/ArrayCell'

import QuickSort from './algorithms/QuickSort'
import BubbleSort from './algorithms/BubbleSort'
import { randomArr, uuidv4 } from './utils/random'


// function component(name: string) {
//   const element = document.createElement('div');

//   element.innerHTML = `<strong>Hello</strong> from TS - ${name}`

//   return element;
// }

// interface Snapshot {
//   arr: Array<number>;
// }

// function arrayComponent(arr: Array<number>, uuid: string) {
//   const element = document.createElement('div');
//   // console.log('snapshot', snapshot.arr.join(","))

//   const max = Math.max.apply(null, arr)

//   const bar = width => `<div style="width: 100%; margin: 2px 0;"><div style="height: 10px; width: ${width}%; background-color: gray;"></div></div>`


//   const bars = arr.map(value => bar(value/max * 100)).join("")
//   const wrapper = `<div style="width: 200px;" id="${uuid}">${bars}</div>`

//   element.innerHTML = wrapper

//   return element;
// }

// function updateArrayComponent(arr: Array<number>, uuid: string) {
//   const element = document.getElementById(uuid);

//   const max = Math.max.apply(null, arr)

//   const bar = width => `<div style="width: 100%; margin: 2px 0;"><div style="height: 10px; width: ${width}%; background-color: gray;"></div></div>`


//   const bars = arr.map(value => bar(value / max * 100)).join("")
//   // const wrapper = `<div style="width: 200px;" id="${uuid}">${bars}</div>`

//   element.innerHTML = bars
// }



// let counter = 0;

// function draw() {
//   document.body.innerHTML = "";
//   document.body.appendChild(component(`Alex - ${counter}`));
//   counter++;

//   window.requestAnimationFrame(draw);
// }

// draw();

const sorts = [
  QuickSort,
  BubbleSort
]

const randomArrExample = randomArr()

const results = sorts.map(Sort => {
  const sortInstance = new Sort(randomArrExample)
  sortInstance.sort()

  return { instance: sortInstance, uuid: uuidv4() }
})

const element = document.createElement('div');
element.innerHTML = `
  <div style="max-width: 900px; margin: 0 auto;">
    <div style="display: flex;">${results.map(({ uuid }) => ArrayCell.init(randomArrExample, uuid)).join('')}</div>
  </div>
`

document.body.appendChild(element)

// console.log(wrappers)

// document.body.appendChild(<any> wrappers);


const maxIterations = Math.max.apply(null, results.map(r => r.instance.snapshots.length))

console.log('maxIterations', maxIterations, results)

// const s = new QuickSort(randomArr())
// const bs = new BubbleSort([10, 5,2,3,1,5,1,2,5,2])
// console.log(s.sort())

const draw = (iter = 0) => () => {
  // document.body.innerHTML = "";
  // document.body.appendChild(arrayComponent(bs.snapshots[i]));
  if (iter < maxIterations) {
    results.forEach(({instance, uuid}) => {
      if (instance.snapshots[iter] ) {
        ArrayCell.render(instance.snapshots[iter].arr, uuid)
      }
    })
    // document.body.innerHTML = "";
    // document.body.appendChild(arrayComponent(<any>s.snapshots[iter]));


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
