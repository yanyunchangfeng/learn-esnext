{
    console.log(0B111110111) // 二进制 503 以0B开头 0b大小写均可 es6
    console.log(0O767) // 八进制以0O开头 503  es6

}
{
    console.log(Number.isFinite(15)) //true
    console.log(Number.isFinite(NaN)) //false
    console.log(Number.isFinite(1 / 0)) //false
    console.log(Number.isNaN(23)) //false
    console.log(Number.isNaN(NaN)) //true
}
{
    console.log(Number.isInteger(25)) //true
    console.log(Number.isInteger(25.0)) //true
    console.log(Number.isInteger(25.1)) //false
    console.log(Number.isInteger('25')) //false 接收的参数为Number类型
}
{
    console.log(Number.MAX_SAFE_INTEGER) //上限 9007199254740991
    console.log(Number.MIN_SAFE_INTEGER) //下限 -9007199254740991
    console.log(Number.isSafeInteger(10)) //true
    console.log(Number.isSafeInteger('a')) //false 参数为num类型 
}

{
    console.log(Math.trunc(6.9))  // 取整 6
    console.log(Math.trunc(6.1))  // 6 
    console.log(Math.trunc(('3.1') as any))// 3 
}
{
    console.log(Math.sign(-5)) // -1 负数
    console.log(Math.sign(0))  // 0
    console.log(Math.sign(5))  // 1  正数
    console.log(Math.sign('5'))  // 1  正数
    console.log(Math.sign('a6'))  // NaN 
}
{
    console.log(Math.cbrt(-1)) //-1 立方根
    console.log(Math.cbrt(-8)) //-2
}