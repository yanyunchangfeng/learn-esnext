import "reflect-metadata";
const INJECTABLE_METADATA_KEY = Symbol("INJECTABLE_KEY");
// 可被注入别的服务
export function Injectable() {
  return function (target: any) {
    Reflect.defineMetadata(INJECTABLE_METADATA_KEY, true, target);
    return target;
  };
}
