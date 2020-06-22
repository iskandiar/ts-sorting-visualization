export default class Sort {
  arr: Array<number>;
  snapshots: Array<object>;
  constructor(arr: Array<number>) {
    this.arr = [...arr];
    this.snapshots = [];
  }

  swap(x: number, y: number, iterators: Array<number>): void {
    [this.arr[x], this.arr[y]] = [this.arr[y], this.arr[x]];

    this.snapshots.push({ arr: [...this.arr], indexes: [x, y], iterators});
  }
}
