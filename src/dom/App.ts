export default class App {
  static render(children: string): void {
    const element = document.createElement('div');
    element.innerHTML = `
      <div>
        ${children}
      </div>
    `

    document.body.appendChild(element)
  }
}
