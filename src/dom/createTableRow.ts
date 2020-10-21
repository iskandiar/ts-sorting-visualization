import createElement, { ElementTuple } from './createElement';
import  { Result } from './../utils/results';
import createPlayIcon from './createPlayIcon';

const createTableRow = (template: string, row: Result[], handleClick: ({ sampleType: string}) => void): ElementTuple => {
  const smallPlayIcon = createPlayIcon(16);

  const firstRowCell = createElement(`${row[0].sampleType}${smallPlayIcon}`, { type: 'div', class: 'name-column cell--play' }, (el) => {
    el.addEventListener('click', () => handleClick({ sampleType: row[0].sampleType}))
})

  const content = firstRowCell[0] + template;

  const initElement = () => {
    firstRowCell[2]()
  }

  return createElement(content, { type: 'div', class: 'row' }, initElement);
}

export default createTableRow;
