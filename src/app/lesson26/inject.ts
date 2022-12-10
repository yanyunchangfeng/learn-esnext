const METADATA_INJECT_KEY = "METADATA_INJECT_KEY";
export function Inject(token) {
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
  return Reflect.defineMetadata(METADATA_INJECT_KEY, target, "index-" + index);
}
