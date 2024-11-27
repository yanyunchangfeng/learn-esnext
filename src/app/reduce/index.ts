declare global {
  interface Array<T> {
    reduceOwn(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduceOwn(
      callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
      initialValue: T
    ): T;
    reduceOwn<U>(
      callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
      initialValue: U
    ): U;
  }
}

export {};

Array.prototype.reduceOwn = function <T, U>(
  this: T[],
  cb: (previousValue: T | U, currentValue: T, currentIndex: number, array: T[]) => T | U,
  initialValue?: T | U
): T | U {
  let accumulator: T | U = initialValue !== undefined ? initialValue : this[0]; // 设置初始值
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};

const a = [1, 2].reduceOwn((acc, cur) => acc + cur); // 0
