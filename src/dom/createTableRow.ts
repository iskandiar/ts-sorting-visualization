import createElement from './createElement';
import createPlayIcon from './createPlayIcon';
import createResultCell from './createResultCell';

const createTableRow = (rowResults: Array<object>) => {
  const smallPlayIcon = createPlayIcon(16);

  const firstRowCell = createElement(`${rowResults[0].sortName}${smallPlayIcon}`, { type: 'div', class: 'name-column cell--play' })
  const resultRowCells = rowResults.map((result) => createResultCell(result.sample, result.uuid))
  const resultRowCellsTemplate = resultRowCells.map(([content]) => content).join('');

  const content = firstRowCell[0] + resultRowCellsTemplate;

  return createElement(content, { type: 'div', class: 'row'});
}

export default createTableRow;
