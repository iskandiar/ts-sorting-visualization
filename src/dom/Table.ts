export default class Table {
  static render(children: string): string {
    return `
    <div style="max-width: 900px; margin: 0 auto;">
      ${children}
    </div>
    `
  }
}
