import { uuidv4 } from '../utils/random';

interface ElementProps {
  class: string;
  type: string;
  id?: string;
}

export default function (content: string, element: ElementProps, initDOM?: (element: HTMLElement, id: string) => void): Array<any> {
  const id = element.id || uuidv4();
  const template = `
    <${element.type} id="${id}" class="${element.class}">
      ${content}
    </${element.type}>
  `;


  const update = (content: string) => {
    const element = document.getElementById(id);

    element.innerHTML = content;
  }

  const init = () => {
    if(!initDOM) return () => {};

    const element = document.getElementById(id);

    return initDOM(element, id);
  }


  return [template, update, init];
}
