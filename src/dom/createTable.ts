import createElement from './createElement';

const createTable = (content: string) => {
  return createElement(content, {type: 'div', class: 'table'});
}

export default createTable;


// const component = (type, content, initDOM) => {
//   const id = uuidv4();
//   const template = `
//     <${type} id="${id}">
//       ${content}
//     </${type}>
//   `;


//   const update = (content: string) => {
//     const element = document.getElementById(id);

//     element.innerHTML = content;
//   }

//   const init = () => {
//     const element = document.getElementById(id);

//     return initDOM(element);
//   }


//   return [template, update, init];
// }


// const [template, update, initDOM] = component('div', 'Lorem Ipsum', (el) => {
//   el.addEventListener('click', () => { console.log('el clicked')});
// })

// document.body.appendChild(template);
// initDOM();

// setTimeout(() => {
//   update('Nope');
// }, 3000)


