import Sort from './Sort';

export default class BubbleSort extends Sort {
  sort(): Array<number> {
    if (this.arr.length === 0) return;

    const len = this.arr.length;

    for(let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if(this.arr[j] > this.arr[j + 1]) {
          this.swap(j, j + 1, [j])
        }
      }
    }
    return this.arr;
  }
}
