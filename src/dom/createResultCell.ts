import createElement from './createElement';

const renderBar = (width: number, isIterator: boolean): string => `
  <div style="width: 100%; margin: 2px 0;">
    <div class="cell-result-bar ${isIterator ? 'cell-result-bar--iterator' : ''}" style="height: 6px; width: ${width}%;"></div>
  </div>
`;

const renderContent = (arr: Array<number>, iterators?: Array<number>, state: any = {}): string => {
  const max = Math.max.apply(null, arr);

  const bars = arr.map((value, idx) =>
    renderBar(
      value / max * 100,
      iterators && iterators.includes(idx) && state.showIndicators
    )
  ).join("");

  return `
    <div class="cell-result-iteration">${state.iteration || (state.iteration === 0 ? 0 : (state.iteration || '')) }</div>
    ${bars}
  `
}

const createResultCell = (arr: number[]): [string, (element: any, state: any) => unknown] => {
  const content = renderContent(arr);

  const [template, update] = createElement(content, { type: 'div', class: 'column cell-result'});

  const overrideUpdate = (element, state) => update(renderContent(element.arr, element.iterators, state));

  return [template, overrideUpdate];
}

export default createResultCell;
