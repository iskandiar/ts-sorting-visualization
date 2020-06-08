import createElement from './createElement';
import createPlayIcon from './createPlayIcon';


const createTableHeader = (sorts: Array<object>, handleClick: (type: string) => void) => {
  const bigPlayIcon = createPlayIcon(32);
  const smallPlayIcon = createPlayIcon(16);

  const firstColumnHeader = createElement(bigPlayIcon, { type: 'div', class: 'name-column cell--play' }, (el) => {
    el.addEventListener('click', () => handleClick({ sortType: 'All', sampleType: 'All'}))
  })

  const nameColumnHeaders = sorts.map((sort) => createElement(`${sort.name}${smallPlayIcon}`, { type: 'div', class: 'column cell--play'}, (el,) => {
    el.addEventListener('click', () => handleClick({sortType: sort.name}))
  }))

  const content = firstColumnHeader[0] + nameColumnHeaders.map(([content]) => content).join('');

  const initElement = () => {
    firstColumnHeader[2]()
    nameColumnHeaders.forEach(([, , initColumnHeader]) => initColumnHeader())
  }

  return createElement(content, { type: 'div', class: 'row row--header' }, initElement);
}

export default createTableHeader;
