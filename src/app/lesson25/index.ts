import "reflect-metadata"; // reflect 引入polyfill
// tsc --init  初始化tsconfig.json文件

let target = {};
Reflect.defineMetadata("name", "yanyunchangfeng", target);
Reflect.defineMetadata("name", "yanyunchangfeng", target, "yycf");
console.dir(target);
console.log(Reflect.getOwnMetadata("name", target));
console.log(Reflect.getOwnMetadata("name", target, "yycf"));

function classMetadata<T>(key: string, value: T) {
  return function (target: typeof Person) {
    Reflect.defineMetadata(key, value, target);
  };
}
function methodMetadata<T>(key: string, value: T) {
  // target类的原型
  return function (target: InstanceType<typeof Person>, propertyName: string) {
    // Person.prototype.hello.name = 'yanyunchengfeng'
    Reflect.defineMetadata(key, value, target, propertyName);
  };
}

// decorator
// 给类本身增加元数据
// @Reflect.metadata('name', 'yycf')
@classMetadata("name", "yycf")
class Person {
  // 给类的原型增加元数据
  // @Reflect.metadata('name', 'yanyunchangfeng')
  @methodMetadata("name", "yanyunchangfeng")
  hello(): string {
    return "yanyunchangfeng";
  }
}
console.log(Reflect.getMetadata("name", Person)); // yycf
console.log(Reflect.getMetadata("name", Person.prototype, "hello")); // yanyunchangfeng
console.log(Reflect.getOwnMetadata("name", new Person(), "hello")); // undefined
console.log(Reflect.getMetadata("name", new Person(), "hello")); // yanyunchangfeng
