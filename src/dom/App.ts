export default class App {
  static render(children: string): void {
    const element = document.createElement('div');
    element.innerHTML = `
      <div style="max-width: 900px; margin: 0 auto;">
        ${children}
      </div>
    `

    document.body.appendChild(element)
  }
}
