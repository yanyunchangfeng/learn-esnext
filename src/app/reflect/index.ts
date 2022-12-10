import "reflect-metadata";

interface Type<T> {
  new (...args: any[]): T;
}
class InjectionToken {
  constructor(public injectionIdentifier: string) {}
}
type Token<T> = Type<T> | InjectionToken;
const METADATA_INJECT_KEY = "METADATA_INJECT_KEY";
class Car {}
// Car是个类，既是一个值，也是一个类型
// Container map[Car] =  {useClass:Car,provide:Car}
let t: Type<Car> = Car;
// 是一个参数装饰器工厂，会返回一个参数装饰器
function Inject(token: Token<any>) {
  /**
   *target GirlFriend类本身
   *paramsIndex 此参数在参数列表中的索引
   *GrilFriend.index-1.METADATA_INJECT_KEY = type
   */
  return function (target: any, _: string, paramsIndex: number) {
    // 定义这个元数据之后有什么用？
    Reflect.defineMetadata(
      METADATA_INJECT_KEY,
      token,
      target,
      `index-${paramsIndex}`
    );
    // 类的构造 函数第几个参数上的token是什么
    // Reflect.getMetadata(METADATA_INJECT_KEY, target, `index-${paramsIndex}`);
    return target;
  };
}
class House {}
class GirlFriend {
  // 是构造函数，因为构造函数是属于类的，类似于静态函数
  constructor(
    private car: Car,
    @Inject(new InjectionToken("house")) private house: House
  ) {}
}
console.log(GirlFriend);
console.log(Reflect.getMetadata(METADATA_INJECT_KEY, GirlFriend, "index-1")); //InjectionToken { injectionIdentifier: 'house' }
