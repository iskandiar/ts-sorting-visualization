import createElement from './createElement';

const renderBar = (width: number): string => `
  <div style="width: 100%; margin: 2px 0;">
    <div style="height: 6px; width: ${width}%; background-color: gray;"></div>
  </div>
`;

const renderContent = (arr: Array<number>): string => {
  const max = Math.max.apply(null, arr);
  return arr.map(value => renderBar(value / max * 100)).join("");
}

const createResultCell = (arr: Array<number>) => {
  const content = renderContent(arr);

  const [template, update] = createElement(content, { type: 'div', class: 'column cell-result'});

  const overrideUpdate = (arr) => update(renderContent(arr));

  return [template, overrideUpdate];
}

export default createResultCell;
