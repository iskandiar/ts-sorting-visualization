export default class TableCell {
  static init(arr: Array<number>, uuid: string): string {
    // const element = document.createElement('div');

    const bars = TableCell.renderBars(arr);
    const wrapper = `<div style="flex: 1 1 auto; padding: 5px; max-width: 200px;" id="${uuid}">${bars}</div>`

    // element.innerHTML = wrapper;

    return wrapper;
  }

  static render(arr: Array<number>, uuid: string): void {
    const element = document.getElementById(uuid);

    element.innerHTML = TableCell.renderBars(arr);
  }

  static renderBars(arr: Array<number>): string {
    const max = Math.max.apply(null, arr);
    const bars = arr.map(value => TableCell.renderBar(value / max * 100)).join("")

    return bars;
  }

  static renderBar(width: number): string {
    return `
      <div style="width: 100%; margin: 2px 0;">
        <div style="height: 6px; width: ${width}%; background-color: gray;"></div>
      </div>
    `
  }

  static renderName(name: string): string {
    return `<div style="flex: 1 1 auto; padding: 5px; max-width: 200px;">${name}</div>`
  }
}
