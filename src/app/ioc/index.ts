export * from "./container";

//4.4 __metadata
// ._decorate:执行装饰器的函数，被执行的装饰器分为四类，类装饰器、参数装饰器、方法装饰器，还有一类特殊的装饰器是ts编译选项 emitDecoratorMetadata 生成的装饰器，
//     用来定义一些特殊元数据design:paramtypes等，这些特殊元数据可以获取编译之前的类型信息
//  . 类型元数据使用元数据键"design:type"
//  . 参数类型元数据使用元数据键"design:paramtypes"
//  . 返回值类型元数据使用元数据键"design:returntype"

// .__metadata:类装饰器工厂，获取的装饰器会将指定键值对与类关联起来
// .__param:参数装饰器工厂，根据参数下标、参数装饰器、获取最终的装饰器，并且将参数下标传递给装饰器

// 4.4.1装饰器
/**
 * 类装饰器
 * @param constructor 类的构造函数
 *
 */
function classDecorator(constructor: Function) {}
/**
 * 属性装饰器
 * @param target 静态成员来说是类的构造函数，对于实例成员是类的原型对象
 * @parma property 属性的名称
 */
function propertyDecorator(target: any, property: string) {}
/**
 * 方法装饰器
 * @param target 静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
 * @param property 方法的名称
 * @param descriptor 方法描述符
 */
function methodDecorator(
  target: any,
  property: string,
  descriptor: PropertyDescriptor
) {}
/**
 * (方法)参数装饰器
 * @param target 静态成员是类的构造函数，实例成员是类的原型对象
 * @param methodName 方法名
 * @param paramsIndex 参数在函数列表中的索引
 */
function paramDecorator(target: any, methodName: string, paramsIndex: number) {}
