import createElement from './createElement';
import createPlayIcon from './createPlayIcon';
import createResultCell from './createResultCell';

const createTableRow = (template: string, row: object) => {
  const smallPlayIcon = createPlayIcon(16);

  const firstRowCell = createElement(`${row[0].sortName}${smallPlayIcon}`, { type: 'div', class: 'name-column cell--play' })

  const content = firstRowCell[0] + template;

  return createElement(content, { type: 'div', class: 'row' });
}

export default createTableRow;
