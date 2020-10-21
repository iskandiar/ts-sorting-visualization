import Sort from './Sort';

export default class InsertionSort extends Sort {
  sort(): Array<number> {
    if (this.arr.length === 0) return;

    const len = this.arr.length;

    for (let i = 1; i < len; i++) {
      const current = this.arr[i];
      let j = i - 1;
      while ((j > -1) && (current < this.arr[j])) {

        this.swap(j, j + 1, [j])
        j--;
      }
      this.arr[j + 1] = current;
    }


    return this.arr;
  }
}
