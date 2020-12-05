// What : BigInt 是一种内置对象，它提供了一种方法来表示大于 253 - 1 的整数。
// 这原本是 Javascript中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。

//描述： 可以用在一个整数字面量后面加 n 的方式定义一个 BigInt ，如：10n，或者调用函数BigInt()。

const theBiggestInt = BigInt('9007199254740991');
// const bigint1: bigint = 999999999999999999n

// 它在某些方面类似于 Number ，但是也有几个关键的不同点：不能用于 Math 对象中的方法；
// 不能和任何 Number 实例混合运算，两者必须转换成同一种类型。
// 在两种类型来回转换时要小心，因为 BigInt 变量在转换成 Number 变量时可能会丢失精度。

// 如何判断BigInt的数据类型  

console.log(typeof theBiggestInt)