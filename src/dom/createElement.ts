import { uuidv4 } from '../utils/random';

interface ElementProps {
  class?: string;
  type: string;
}

export type ElementTuple = [string, (content: string) => void, () => unknown];

//TODO return tuple (TS)
export default function (
  content: string,
  element: ElementProps,
  initDOM?: (element: HTMLElement, id: string) => void
): ElementTuple {
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
    if (!initDOM) return () => { }; // eslint-disable-line

    const element = document.getElementById(id);

    return initDOM(element, id);
  }

  return [template, update, init];
}
