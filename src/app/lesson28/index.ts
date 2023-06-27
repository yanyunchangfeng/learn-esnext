// 高阶函数的概念： 1. 一个函数返回一个函数  2.一个函数可以参数接受一个函数 高阶函数
// 这两个条件满足任何一个就是高阶函数 promise内部肯定也是回调函数 (内部包含着高阶函数)

// 装饰器模式 （对原本的功能进行包装）
// 扩展方法 会用到高阶函数
function core<T>(a: T, b: T, c: T) {
  // 核心代码
  // todo...
  console.log("core .......", a, b, c);
}
type Fn = (...args: any[]) => any;
interface Function {
  before(fn: Fn): Fn;
}

// 给core函数增加一些额外的逻辑 但是不能更改核心代码
// 每个类都有一个原型，所有实例都有一个属性__proto__
Function.prototype.before = function (beforeFn) {
  // this = core
  return (...args: any[]) => {
    // newCore  剩余运算符 可以把多个参数转化成数组     箭头函数中没有this 没有arguments 没有prototype
    beforeFn();
    this(...args); // 拓展运算符
  };
};
let newCore = core.before(() => {
  console.log("core before");
});
newCore(1, 2, 4);

// 闭包 1） 定义函数的作用域 和调用的作用域不是同一个

// 1.如果我们想给函数进行扩展 可以使用高阶函数
