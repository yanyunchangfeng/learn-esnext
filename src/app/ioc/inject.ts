import { Token } from "./provider";

const METADATA_INJECT_KEY = "METADATA_INJECT_KEY";
export function Injector(token) {
  return function (target, key, paramsIndex) {
    Reflect.defineMetadata(
      METADATA_INJECT_KEY,
      token,
      target,
      "index-" + paramsIndex
    );
    return target;
  };
}
export function getInjectionToken(target, index) {
  let token = Reflect.getMetadata(
    METADATA_INJECT_KEY,
    target,
    "index-" + index
  );
  return token as Token<any> | undefined;
}
