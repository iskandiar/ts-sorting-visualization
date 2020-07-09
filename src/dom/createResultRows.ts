import createElement from './createElement';

const createResultRows = (resultRows: any) => {
  const content = resultRows.map(([template]) => template).join('')
  const resultRowsInit = resultRows.map(([, , init]) => init)

  const initElement = () => resultRowsInit.forEach(i => i())

  return createElement(content, { type: 'div' }, initElement);
}

export default createResultRows;
