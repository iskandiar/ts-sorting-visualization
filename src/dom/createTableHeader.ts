import createElement, { ElementTuple } from './createElement';
import createPlayIcon from './createPlayIcon';

// import Sort from './../algorithms/Sort';

export interface SortI {
  name: string,
  klass: any
}

const createTableHeader = (sorts: SortI[], handleClick: ({ sampleType, sortType }) => void): ElementTuple => {
  const bigPlayIcon = createPlayIcon(32);
  const smallPlayIcon = createPlayIcon(16);

  const firstColumnHeader = createElement(bigPlayIcon, { type: 'div', class: 'name-column cell--play' }, (el) => {
    el.addEventListener('click', () => handleClick({ sortType: null, sampleType: null}))
  })

  const nameColumnHeaders = sorts.map((sort) => createElement(`${sort.name}${smallPlayIcon}`, { type: 'div', class: 'column cell--play'}, (el) => {
    el.addEventListener('click', () => handleClick({ sortType: sort.name, sampleType: null}))
  }))

  const content = firstColumnHeader[0] + nameColumnHeaders.map(([content]) => content).join('');

  const initElement = () => {
    firstColumnHeader[2]()
    nameColumnHeaders.forEach(([, , initColumnHeader]) => initColumnHeader())
  }

  return createElement(content, { type: 'div', class: 'row row--header' }, initElement);
}

export default createTableHeader;
