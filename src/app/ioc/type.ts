export interface Type<T> {
  new (...arg: any[]): T;
}
