"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
require("reflect-metadata");
var InjectionToken = /** @class */ (function () {
    function InjectionToken(injectionIdentifier) {
        this.injectionIdentifier = injectionIdentifier;
    }
    return InjectionToken;
}());
var METADATA_INJECT_KEY = "METADATA_INJECT_KEY";
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
// Car是个类，既是一个值，也是一个类型
// Container map[Car] =  {useClass:Car,provide:Car}
var t = Car;
// 是一个参数装饰器工厂，会返回一个参数装饰器
function Inject(token) {
    /**
     *target GirlFriend类本身
     *paramsIndex 此参数在参数列表中的索引
     *GrilFriend.index-1.METADATA_INJECT_KEY = type
     */
    return function (target, _, paramsIndex) {
        // 定义这个元数据之后有什么用？
        Reflect.defineMetadata(METADATA_INJECT_KEY, token, target, "index-" + paramsIndex);
        // 类的构造 函数第几个参数上的token是什么
        // Reflect.getMetadata(METADATA_INJECT_KEY, target, `index-${paramsIndex}`);
        return target;
    };
}
var House = /** @class */ (function () {
    function House() {
    }
    return House;
}());
var GirlFriend = /** @class */ (function () {
    // 是构造函数，因为构造函数是属于类的，类似于静态函数
    function GirlFriend(car, house) {
        this.car = car;
        this.house = house;
    }
    GirlFriend = __decorate([
        __param(1, Inject(new InjectionToken("house")))
    ], GirlFriend);
    return GirlFriend;
}());
console.log(GirlFriend);
console.log(Reflect.getMetadata(METADATA_INJECT_KEY, GirlFriend, "index-1")); //InjectionToken { injectionIdentifier: 'house' }
