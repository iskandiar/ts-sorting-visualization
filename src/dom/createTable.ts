import createElement from './createElement';

const createTable = (content: string, init: any) => {
  const initElement = () => {
    init.forEach(i => i())
  }
  return createElement(content, { type: 'div', class: 'table' }, initElement);
}

export default createTable;
