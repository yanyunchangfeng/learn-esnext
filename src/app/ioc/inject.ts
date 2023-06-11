import { Token } from "./provider";
import { Type } from "./type";
const METADATA_INJECT_KEY = "METADATA_INJECT_KEY";
export function Injector<T>(token: Token<T>) {
  return function (target: any, key: undefined, paramsIndex: number) {
    Reflect.defineMetadata(
      METADATA_INJECT_KEY,
      token,
      target,
      "index-" + paramsIndex
    );
    return target;
  };
}
export function getInjectionToken<T>(target: Type<T>, index: number) {
  let token = Reflect.getMetadata(
    METADATA_INJECT_KEY,
    target,
    "index-" + index
  );
  return token as Token<any> | undefined;
}
