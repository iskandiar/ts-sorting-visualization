export default function(children: string, initDOM: any): void {
  const element = document.createElement('div');
  element.innerHTML = `
      <div>
        ${children}
      </div>
    `

  document.body.appendChild(element)

  initDOM()
}
