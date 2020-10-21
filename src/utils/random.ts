
const randomValue = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);

export const uuidv4 = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const randomArr = (size = 20): Array<number> => [...Array(size)].map(() => randomValue());

export const nearlySortedArr = (size = 20): Array<number> => sortedArr(size).map(num => randomValue(0.7 * num, 1.3 * num) || num);

export const reversedSortedArr = (size = 20): Array<number> => sortedArr(size).reverse();

export const sortedArr = (size = 20): Array<number> => randomArr(size).sort((a, b) => a > b ? 1 : -1);
