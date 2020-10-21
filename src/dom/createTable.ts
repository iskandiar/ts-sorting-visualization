import createElement, { ElementTuple } from './createElement';

const createTable = (tableHeader: ElementTuple, resultRows: ElementTuple): ElementTuple => {
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
