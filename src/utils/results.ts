
export interface Result {
  instance: unknown;
  sortType: string;
  sampleType: string;
  sample: number[];
}

export const prepareResults = (sorts, samples): Result[][] => (
  samples.map(({ name: sampleType, sample }) => {
    return sorts.map(({ name: sortType, klass }) => {
      const instance = new klass([...sample])
      instance.sort()

      return { instance, sortType, sampleType, sample }
    })
  })
)

export const getMaxIterations = (results): number => {
  const snapshotLengths = results.map(elements => elements.map(el => el.instance.snapshots.length)).flat()

  return Math.max.apply(null, snapshotLengths)
}

export const getFlattenResults = results => results.flat().map((el, idx) => ({ ...el, idx }))

export const updateResults = (results, iter, updateResultCell): void => results.forEach(({ idx, instance }) => {
  if (instance.snapshots[iter]) {
    const isLastIteration = iter === instance.snapshots.length - 1
    updateResultCell[idx](instance.snapshots[iter], { showIndicators: !isLastIteration, iteration: iter })
  } else if (!instance.snapshots[iter] && iter === 0) {
    updateResultCell[idx]({arr: instance.arr}, { showIndicators: true, iteration: 0 })
  }
})

export const resetResults = (results, updateResultCell): void => results.forEach(({ idx, instance, sample }) => {
  updateResultCell[idx]({ arr: sample }, { showIndicators: false })
})
