import Sort from './Sort';

export default class QuickSort extends Sort {
  sort(): Array<number> {
    if (this.arr.length ===0) return;
  
    this.qsort(0, this.arr.length - 1)

    return this.arr;
  }

  private qsort(low: number, high: number) {
    if(low < high) {
      const pi = this.partition(low, high);

      this.qsort(low, pi - 1);
      this.qsort(pi + 1, high);
    }
  }

  private partition(low: number, high: number): number {
    const pivot = this.arr[high]
    let i = low - 1;

    for(let j = low; j <= high - 1; j++) {
      if (this.arr[j] < pivot) {
        i++;
        this.swap(i, j, [i, j]);
      }
    }
    this.swap(i + 1, high, [i + 1, high]);

    return i + 1;
  }
}
