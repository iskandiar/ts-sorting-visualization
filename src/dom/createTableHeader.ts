import createElement from './createElement';
import createPlayIcon from './createPlayIcon';


const createTableHeader = (sorts: Array<object>) => {
  const bigPlayIcon = createPlayIcon(32);
  const smallPlayIcon = createPlayIcon(16);

  const firstColumnHeader = createElement(bigPlayIcon, { type: 'div', class: 'name-column cell--play'})

  const nameColumnHeaders = sorts.map((sort) => createElement(`${sort.name}${smallPlayIcon}`, { type: 'div', class: 'column cell--play'}))

  const content = firstColumnHeader[0] + nameColumnHeaders.map(([content]) => content).join('');

  return createElement(content, { type: 'div', class: 'row row--header' });
}

export default createTableHeader;

// export default class TableHeader {
//   static render(sorts: Array<string>): string {
//     const cells = ['', ...sorts].map(sort => (`
//       <div style="flex: 1 1 auto; padding: 5px; max-width: 200px;">
//       ${sort ? sort.name : 'Sorting'}</div>
//     `)).join('')

//     return `
//       <div style="display: flex;">${cells}</div>
//     `
//   }
// }
