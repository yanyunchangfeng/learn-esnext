//  函数柯里化   通用的柯里化函数

// 柯里化也是一个高阶函数

// 判断元素的类型

// function isType(typing) { // 内置参数的功能
//     return function (val) {
//         return Object.prototype.toString.call(val) === `[object ${typing}]`
//     }
// }

// 让方法更具体一些 isNumber isString
// let utils: any = {};
// ['String', 'Number', 'Boolean'].forEach(method => {
//     utils[`is` + method] = isType(method)
// })
// let bool = utils.isNumber(123)
// console.log(bool)
// console.log( isType(123,'Number'))
// console.log( isType(123,'String'))

function sum<T extends number>(a: T, b: T, c: T, d: T, e: T) {
  // 我要记录每次调用时传入的参数，并且和函数的参数个数进行比较，如果不满足总个数 就返回新函数，
  // 如果传入的个数和参数一致 执行原来的函数
  return a + b + c + d + e;
}
// 分批传入参数
// redux compose
const curringOld = (fn: Ifn, arr: any[] = []) => {
  //arr 就是我们要收集每次调用时传入的参数
  let len = fn.length; //函数的长度就是参数个数
  return function (...args: any[]) {
    let newArgs = [...arr, ...args];
    if (newArgs.length === len) {
      // 有问题1. 如果传入的参数过多，无法执行函数
      // curringOld函数 形式上接收两个参数，不如curring一个参数优雅
      return fn(...newArgs);
    } else {
      return curringOld(fn, newArgs);
    }
  };
};

// 实现通用的柯里化函数，高阶函数
interface Ifn {
  (...args: any[]): any;
}
function curring<T extends Ifn>(fn: T) {
  // 存储每次调用的时候传入的变量
  const inner = (args: any[] = []) => {
    // 存储每次调用时传入的变量
    return args.length >= fn.length
      ? fn(...args)
      : (...userArgs: any[]) => inner([...args, ...userArgs]); // 递归返回函数
  };
  return inner();
}

let newSum = curring(sum);

function isType(typing: string, val: any) {
  //内置参数的功能
  return Object.prototype.toString.call(val) === `[object ${typing}]`;
}

let newIsType = curring(isType);
let isString = newIsType("String");
let isNumber = newIsType("Number");

console.log(isString("yycf"));
console.log(isNumber("yycf"));

// 柯里化函数 每次的入参都是一个参数
console.log(newSum(1)(2)(3)(4)(5));
console.log(newSum(1)(2)(3, 4, 5));
