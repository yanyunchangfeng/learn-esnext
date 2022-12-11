"use strict";
var __decorate = function (decorators, target, key, desc) {
  // 获取参数长度，当参数长度小于3，说明目标就是target，否则目标为方法描述器
  // 描述符不存在时，通过key从target获取，即认为key是方法名
  let argsLength = arguments.length;
  let decoratorTarget =
    argsLength < 3
      ? target
      : desc == null
      ? (desc = Object.getOwnPropertyDescriptor(target, key))
      : desc;
  for (let i = decorators.length - 1; i >= 0; i--) {
    let decorator = decorators[i];
    /**
     * 注意要倒序调用装饰器
     * 如果长度小于3，说明是类装饰器，直接把类给装饰器就可以了
     * 如果长度等于3，说明是类装饰器，并且有key，要把target和key传给装饰器
     * 如果长度大于3，说明是方法装饰器，把类 key ，desc 传给装饰器
     */
    if (decorator) {
      decoratorTarget =
        argsLength < 3
          ? decorator(decoratorTarget)
          : argsLength > 3
          ? decorator(target, key, decoratorTarget)
          : decorator(target, key) || decoratorTarget;
    }
  }
  return (
    //说明修饰的是方法描述符 重新给目标的key设置方法描述符
    argsLength > 3 &&
      decoratorTarget &&
      Object.defineProperty(target, key, decoratorTarget),
    decoratorTarget
  );
};

Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var InjectionToken = /** @class */ (function () {
  function InjectionToken(injectionIdentifier) {
    this.injectionIdentifier = injectionIdentifier;
  }
  return InjectionToken;
})();
var METADATA_INJECT_KEY = "METADATA_INJECT_KEY";

// Car是个类，既是一个值，也是一个类型
// Container map[Car] =  {useClass:Car,provide:Car}
var t = Car;
// 是一个参数装饰器工厂，会返回一个参数装饰器

function Car() {}
function House() {}
function GirlFriend(car, house) {
  this.car = car;
  this.house = house;
}

/**
 * 参数装饰器工厂
 * @param {*} paramIndex 这个参数在参数列表中的索引
 * @param {*} decorator 参数装饰器
 */
var __param = function (paramIndex, decorator) {
  return function (target) {
    // 是一个类装饰器 target=GirlFriend paramIndex=1
    decorator(target, undefined, paramIndex); //在类装饰器调用了参数装饰器，是把参数装饰器当成一个普通方法来调用
  };
};
// 也是一个类装饰器工厂
var __metadata = function (key, value) {
  //   return Reflect.metadata(key, value);
  return function (target) {
    //返回一个类装饰器 target是类本身
    Reflect.defineMetadata(key, value, target);
    return target;
  };
};

function Inject(token) {
  return function (target, key, paramsIndex) {
    Reflect.defineMetadata(
      METADATA_INJECT_KEY,
      token,
      target,
      "index-" + paramsIndex
    );
    // Reflect.defineMetadata(`index-${paramsIndex}`, token, target); 不这样写的目的是防止重名
    return target;
  };
}
var __decorate = function (decorators, target) {
  for (let i = decorators.length - 1; i >= 0; i--) {
    let decorator = decorators[i];
    target = decorator(target) || target;
  }
  return target;
};

// 执行装饰器 从后往前装饰
GirlFriend = __decorate(
  [
    __param(1, Inject(new InjectionToken("house"))), // 如果用了Inject参数装饰器
    __metadata("design:paramtypes", [Car, House]),
  ],
  GirlFriend
);
console.log(GirlFriend);
console.log(Reflect.getMetadata(METADATA_INJECT_KEY, GirlFriend, "index-1")); //InjectionToken { injectionIdentifier: 'house' }
// console.log(Reflect.getMetadata("index-1",GirlFriend)); //InjectionToken { injectionIdentifier: 'house' }
console.log(Reflect.getMetadata("design:type", GirlFriend)); // 返回类型本身GrilFriend
console.log(Reflect.getMetadata("design:paramtypes", GirlFriend)); //参数类型列表
console.log(Reflect.getMetadata("design:returntype", GirlFriend)); //返回值的类型
