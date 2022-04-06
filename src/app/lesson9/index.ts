//Symbol类型提供一个独一无二的值
{
  //声明
  let a1 = Symbol();
  let a2 = Symbol();
  console.log(a1 === a2) //false
  console.log(typeof a1) //symbol
  console.log(a1, a2) //Symbol() Symbol()
  //如果要取值，就要用Symbol.for();
  let a3 = Symbol.for('a3'); //'a3是key值'
  //区别 Symbol.for()先检查这个值在全局是否注册过，如果注册过，返回这个值，如果没注册，就调Symbnol()生成一个值
  console.log(a3);//Symbol(a3)
  let a4 = Symbol.for('a3');
  console.log(a3 === a4) //true
}
{
  let a1 = Symbol.for('abc');
  let obj = {
    [a1]: 123,
    'abc': 456,
    'c': 456,
  }
  console.log(obj)//{abc: 456, c: 456, Symbol(abc): 123}
  // Symbol值无法通过for in for of 便历拿到
  for (let key in obj) {
    console.log(key)// abc c
  }
  Object.getOwnPropertySymbols(obj).forEach(val => console.log(obj[val])) //返回值是数组 123
  Reflect.ownKeys(obj).forEach(item => console.log(item, obj[item])) //拿到所有的key 和value
  console.log(Reflect.ownKeys(obj))
}