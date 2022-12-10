// What : BigInt 是一种内置对象，它提供了一种方法来表示大于 253 - 1 的整数。
// 这原本是 Javascript中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。

//描述： 可以用在一个整数字面量后面加 n 的方式定义一个 BigInt ，如：10n，或者调用函数BigInt()。

const theBiggestInt = BigInt("9007199254740991");
// const bigint1 = 999999999999999999n;

// 它在某些方面类似于 Number ，但是也有几个关键的不同点：不能用于 Math 对象中的方法；
// 不能和任何 Number 实例混合运算，两者必须转换成同一种类型。
// 在两种类型来回转换时要小心，因为 BigInt 变量在转换成 Number 变量时可能会丢失精度。

// 如何判断BigInt的数据类型

console.log(typeof theBiggestInt);

// 运算
// 以下操作符可以和 BigInt 、一起使用： +、`*`、`-`、`**`、`%` 。
// 除 >>> （无符号右移）之外的 位操作 也可以支持。
// 因为 BigInt 都是有符号的， >>> （无符号右移）不能用于 BigInt。为了兼容 asm.js ，BigInt 不支持单目 (+) 运算符。
//let b  = +1n; //Operator '+' cannot be applied to type 'bigint'.ts(2736)
// let a = -1n;
// console.log(a);

// 比较
// BigInt 和 Number 不是严格相等的，但是宽松相等的。

// 0n === 0
// // ↪ false

// 0n == 0
// // ↪ true
// console.log(Number(0n) == 0);
// let b: any = 0n;
// console.log(b === 0);

// 条件
// if (0n) {
//   console.log("Hello from the if!");
// } else {
//   console.log("Hello from the else!");
// }

// ↪ "Hello from the else!"

// console.log(0n || 12n);
// ↪ 12n

// console.log(0n && 12n);
// ↪ 0n

// console.log(Boolean(0n));
// ↪ false

// console.log(Boolean(12n));
// ↪ true

// console.log(!12n);
// ↪ false

// console.log(!0n)
// ↪ true
// 静态方法
// BigInt.asIntN(width, bigint)
// 将 BigInt 值转换为一个 -2width-1 与 2width-1-1 之间的有符号整数。xxxxxx
// width
// 可存储整数的位数。
// bigint
// 要存储在指定位数上的整数。
// 返回值
// bigint 模(modulo) 2width 作为有符号整数的值。
// let an = BigInt.asIntN(40,559999999999n)
// console.log(an)
// BigInt.asUintN()
// 将一个 BigInt 值转换为 0 与 2width-1 之间的无符号整数。
