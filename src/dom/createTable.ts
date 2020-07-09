import createElement from './createElement';

const createTable = (tableHeader: any, resultRows: any) => {
  const [tableHeaderTemplate, , tableHeaderInit] = tableHeader
  const [resultRowsTemplate, , resultRowsInit] = resultRows

  const initElement = () => {
    tableHeaderInit()
    resultRowsInit()
  }

  const content = tableHeaderTemplate + resultRowsTemplate

  return createElement(content, { type: 'div', class: 'table' }, initElement);
}

export default createTable;
