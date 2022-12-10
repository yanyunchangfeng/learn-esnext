/*
export interface Type<T> {
    new (...arg: any[]): T;
  }
*/
import { Type } from "./type";

//针对字符串类型的token我们编写一个InjectionToken
//为什么不能直接用字符串当token，因为可以重名
export class InjectionToken {
  constructor(public injectionIdentifier: string) {}
}
// 如果你有多个字符串类型的token的话InjectionToken
// string Logger = new InjectionToken('Logger')
// string Find = new InjectionToken('Find')
export type Token<T> = Type<T> | InjectionToken;

export interface BaseProvider<T> {
  provide: Token<T>;
}

export interface ClassProvider<T> extends BaseProvider<T> {
  useClass: Type<T>;
}
export interface ValueProvider<T> extends BaseProvider<T> {
  useValue: T;
}
export interface FactoryProvider<T> extends BaseProvider<T> {
  useFactory: () => T;
}
export type Provider<T> =
  | ClassProvider<T>
  | ValueProvider<T>
  | FactoryProvider<T>;

//自定义类型保护
export function isClassProvider<T>(
  provider: BaseProvider<T>
): provider is ClassProvider<T> {
  return (provider as any).useClass != undefined;
}
export function isValueProvider<T>(
  provider: BaseProvider<T>
): provider is ValueProvider<T> {
  return (provider as any).useValue != undefined;
}
export function isFactoryProvider<T>(
  provider: BaseProvider<T>
): provider is FactoryProvider<T> {
  return (provider as any).useFactory != undefined;
}
