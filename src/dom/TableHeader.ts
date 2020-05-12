export default class TableHeader {
  static render(sorts: Array<string>): string {
    const cells = ['', ...sorts].map(sort => (`
      <div style="flex: 1 1 auto; padding: 5px; max-width: 200px;">
      ${sort ? sort.name : 'Sorting'}</div>
    `)).join('')

    return `
      <div style="display: flex;">${cells}</div>
    `
  }
}
