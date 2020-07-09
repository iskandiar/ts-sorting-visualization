export const prepareResults = (sorts, samples) => samples.map(({ name: sampleType, sample }) => {
  return sorts.map(({ name: sortType, klass }) => {
    const instance = new klass([...sample])
    instance.sort()

    return { instance, sortType, sampleType, sample }
  })
})

export const getMaxIterations = results => {
  const snapshotLengths = results.map(elements => elements.map(el => el.instance.snapshots.length)).flat()

  return Math.max.apply(null, snapshotLengths)
}

export const getFlattenResults = results => results.flat().map((el, idx) => ({ ...el, idx }))

export const updateResults = (results, iter, updateResultCell) => results.forEach(({ idx, instance }) => {
  if (instance.snapshots[iter]) {
    const isLastIteration = iter === instance.snapshots.length - 1
    updateResultCell[idx](instance.snapshots[iter], { showIndicators: !isLastIteration, iteration: iter })
  }
})

export const resetResults = (results, updateResultCell) => results.forEach(({ idx, instance, sample }) => {
  updateResultCell[idx]({ arr: sample }, { showIndicators: false })
})
