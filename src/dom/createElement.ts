import { uuidv4 } from '../utils/random';

interface ElementProps {
  class: string;
  type: string;
}

//return tuple (TS)
export default function (content: string, element: ElementProps, initDOM?: any): Array<any> {
  const id = uuidv4();
  const template = `
    <${element.type} id="${id}" class="${element.class}">
      ${content}
    </${element.type}>
  `;

  const update = function(newContent){
    const element = document.getElementById(id);

    element.innerHTML = newContent;
  }

  const init = () => {
    if(!initDOM) return () => {};

    const element = document.getElementById(id);

    return initDOM(element, id);
  }

  return [template, update, init];
}
