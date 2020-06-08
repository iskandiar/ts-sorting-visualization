import createElement from './createElement';
import createPlayIcon from './createPlayIcon';

const createTableRow = (template: string, row: object, handleClick: (type: string) => void) => {
  const smallPlayIcon = createPlayIcon(16);

  const firstRowCell = createElement(`${row[0].sortName}${smallPlayIcon}`, { type: 'div', class: 'name-column cell--play' }, (el) => {
    el.addEventListener('click', () => handleClick({sampleType: row[0].sortName}))
})

  const content = firstRowCell[0] + template;

  const initElement = () => {
    firstRowCell[2]()
  }

  return createElement(content, { type: 'div', class: 'row' }, initElement);
}

export default createTableRow;
