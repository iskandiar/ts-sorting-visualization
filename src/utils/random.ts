
const randomValue = (min:number = 1, max:number = 100) => Math.floor(Math.random() * (max - min + 1) + min)

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const randomArr = (size:number = 20): Array<number> => [...Array(size)].map(() => randomValue())

export const nearlySortedArr = (size: number = 20): Array<number> => randomArr(size).sort().map(num => randomValue(0.8 * num, 1.2 * num))

export const reversedSortedArr = (size: number = 20): Array<number> => randomArr(size).sort().reverse()

export const sortedArr = (size: number = 20): Array<number> => randomArr(size).sort()
