import createElement from './createElement';

const renderBar = (width: number, isIterator: boolean): string => `
  <div style="width: 100%; margin: 2px 0;">
    <div class="cell-result-bar ${isIterator ? 'cell-result-bar--iterator' : ''}" style="height: 6px; width: ${width}%;"></div>
  </div>
`;

const renderContent = (arr: Array<number>, iterators?: Array<number>, isLastIteration?: Boolean = false): string => {
  const max = Math.max.apply(null, arr);
  return arr.map((value, idx) => 
    renderBar(
      value / max * 100,
      iterators && iterators.includes(idx) && !isLastIteration
    )
  ).join("");
}

const createResultCell = (arr: Array<number>) => {
  const content = renderContent(arr);

  const [template, update] = createElement(content, { type: 'div', class: 'column cell-result'});

  const overrideUpdate = (element, isLastIteration) => update(renderContent(element.arr, element.iterators, isLastIteration));

  return [template, overrideUpdate];
}

export default createResultCell;
