//Generator
{
  //generator基本定义
  let tell = function* () {
    yield "a";
    yield "b";
    return "c";
  };
  let k = tell();
  //  console.log(k.next())   //{value: "a", done: false}
  //  console.log(k.next()) // {value: "b", done: false}
  //  console.log(k.next()) // {value: "c", done: true}
  //  console.log(k.next())      // {value: undefined, done: true}
}
{
  let obj: any = {};
  obj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  };
  for (let value of obj) {
    // console.log(value) //1 2 3
  }
}

{
  let state = async function () {
    let a = 1;
    await (a = 50);
    await console.log(2);
    return a;
  };
  let status = state();
  status.then(function (result) {
    console.log(result);
  });
}

{
  let draw = function (count: number) {
    //具体抽奖逻辑
    console.info(`剩余次数${count}`);
  };
  let residue = function* (count: number) {
    while (count > 0) {
      count--;
      yield draw(count);
    }
  };
  let star = residue(5);
  let btn = document.createElement("button");
  btn.id = "start";
  btn.innerHTML = "抽奖";
  document.body.appendChild(btn);
  document.getElementById("start")!.addEventListener("click", function () {
    star.next();
  });
}
{
  function timeout(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  async function fn<T>(value: T, ms: number) {
    await timeout(ms);
    console.log(1000);
    await timeout(ms * 2);
    console.log(3000);
    await timeout(ms * 3);
    console.log(6000);
    await timeout(ms * 4);
    console.log(10000);
    console.log(value);
  }
  fn("hello yycf", 1000); // 1000 3000 6000 10000 hello yycf
}
{
  //长轮训 比如说服务器的某一个数据状态定期的去变化，前端需要实时取状态 webSocket兼容性不好
  let ajax = function* () {
    yield new Promise(function (resolve, reject) {
      //真实接口写在这里
      setTimeout(function () {
        resolve({ code: 0 });
      }, 200);
    });
  };
  let pull = function () {
    let generator = ajax();
    let step: any = generator.next();
    step.value.then(function (d: Record<string, any>) {
      if (d.code != 0) {
        setTimeout(function () {
          console.info("wait");
          pull();
        }, 1000);
      } else {
        console.info(d);
      }
    });
  };
  pull();
}
//1.回顾一下ES6里面手动获得Iterator的例子
{
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push("yycf" + i);
  }
  let iterator = arr[Symbol.iterator]();
  let result = iterator.next();
  while (!result.done) {
    console.log(result);
    // {value: "yycf0", done: false}
    // {value: "yycf1", done: false}
    // {value: "yycf2", done: false}
    // {value: "yycf3", done: false}
    // {value: "yycf4", done: false
    result = iterator.next();
  }
}
// 2. generator 基本用法
{
  function* testGenerator() {
    yield "燕"; //通过yield 关键字来返回多个值，并且把函数的执行权限让出去
    yield "云";
    yield "长";
    yield "风"; //返回一个字符串“风”出去，然后【让出】函数的执行权限，等待下一次next()调用
  }
  let iterator = testGenerator(); //执行这个generator函数返回迭代器对象
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  // {value: "燕", done: false}
  // {value: "云", done: false}
  // {value: "长", done: false}
  // {value: "风", done: false}
  // {value: undefined, done: true}
}

{
  //3.generator只有调用next()才会返回下一个值，如果我们一直不调用next(),它会让出CPU执行时间
  // 既然调用next()的时候才会继续执行下一步，那么利用这个特性，我们可以构建一个永不终止的generator函数
  function* naturalNumber() {
    let num = 1;
    while (true) {
      yield num;
      num++;
    }
    //这是死循环，但是页面不会卡死，因为generator通过yield关键字让出了执行权限，js引擎不会认为这是一个死循环卡死在这里
  }
  const num = naturalNumber();
  console.log(num.next());
  console.log(num.next());
  console.log(num.next());
  console.log(num.next());
  //    {value: 1, done: false}
  //    {value: 2, done: false}
  //    {value: 3, done: false}
  //    {value: 4, done: false}
}
// 4.既然generator函数会返回一个迭代器对象，那么我们可以利用这个特性，来给某些对象加上iterator属性
// 利用Generator给自定义对象的接口实现Iterator接口
{
  const user: Record<string | symbol, any> = {
    name: "yycf",
    age: 26,
  };
  user[Symbol.iterator] = function* () {
    for (let key in user) {
      yield user[key];
    }
  };
  //    console.log(...user)//yycf 26

  //    function test11(...user,c,b){
  //      console.log(user,c,b)
  //    }
  //    test11(...user,1)
}
// 5. for of 会在内部隐含使用迭代器Iterator，所以可以直接用for...of来便历generator函数

{
  function* foo() {
    for (let i = 0; i < 3; i++) {
      yield i;
    }
  }
  for (let value of foo()) {
    console.log(value);
    //    0
    //    1
    //    2
  }
}
// 6. Generator函数能互相调用吗？-->使用yield* 语法
{
  function* g1() {
    yield 1;
    yield 2;
    yield 3;
  }
  function* g2() {
    yield* g1(); //把执行权限让给g1执行，直到g1把所有的值都输出后，再执行g2
    yield 4;
    yield 5;
    yield 6;
  }
  let iterator = g2();
  let result = iterator.next();
  while (!result.done) {
    console.log(result);
    //         {value: 1, done: false}
    //         {value: 2, done: false}
    //         {value: 3, done: false}
    //         {value: 4, done: false}
    //         {value: 5, done: false}
    //         {value: 6, done: false}
    result = iterator.next();
  }
}
{
  // 7.yield* 一个Iterator对象会怎么样？ES6里面Array Set Map String NodeLists都实现了Iterator接口
  function* testYield() {
    yield* [1, 2, 3]; //yield* 返回数组的时候，数组会把迭代器对象返回出来，
    // 这样就导致把执行权限让给了数组的迭代器，从而获得1，2，3的值
    yield* new Set([4, 5, 6]);
    yield* new Map([
      [1, "one"],
      [2, "two"],
    ]);
    yield* "HelloWorld";
  }
  let iterator = testYield();
  let result = iterator.next();
  while (!result.done) {
    console.log(result);
    //  {value: 1, done: false}
    //  {value: 2, done: false}
    //  {value: 3, done: false}
    //  {value: 1, done: false}
    //  {value: 2, done: false}
    //  {value: 3, done: false}
    //  {value: Array(2), done: false}done: false value: (2) [1, "one"]
    //  {value: Array(2), done: false}done: false value: (2) [2, "two"]
    //  {value: "H", done: false}
    //  {value: "e", done: false}
    //  {value: "l", done: false}
    //  {value: "l", done: false}
    //  {value: "o", done: false}
    //  {value: "W", done: false}
    //  {value: "o", done: false}
    //  {value: "r", done: false}
    //  {value: "l", done: false}
    //  {value: "d", done: false}
    result = iterator.next();
  }
}

{
  // 8.用yield封装Promise
  function getData(x: number) {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        resolve(x * 2);
      }, 1000);
    });
  }
  //我们的目标是：两次异步操作都成功之后，才去做我们的业务，并且两次异步有先后顺序，即第一次异步执行完成后，执行第二步操作
  function* myBz(): Iterator<Promise<number>, Promise<number>, any> {
    let p1 = yield getData(10);
    console.log(p1);
    let p2 = yield getData(20);
    console.log(p2);
    return p1 + p2;
  }
  let bzIter = myBz();
  // bzIter.next().value.then(function(result){
  //     bzIter.next().value(function(result){
  //         bzIter.next()
  //     })
  // })
  // 回调地狱
  //自动调用方法；递归调用工具
  function runner(generator: Function) {
    let g = generator();
    function next(data?: any) {
      let result = g.next(data);
      // next() 方法返回一个包含属性 done 和 value 的对象。该方法也可以通过接受一个参数用以向生成器传值。
      // next 的参数就是 yield 表达式的返回值。
      if (result.done) {
        return result.value;
      }
      result.value.then(function (data: any) {
        next(data); //这里开始递归
      });
    }
    next();
  }

  runner(myBz);
  // 1s ->20  ,  2s->40

  async function myBz2() {
    const a: any = await getData(10);
    console.log(a);
    const b: any = await getData(20);
    console.log(b);
    return a + b;
  }
  myBz2().then((result) => {
    console.log(result);
    console.log("开始执行其他业务操作");
  });
}

{
  function* foo(x: number): Generator<number, number, number> {
    var y = 2 * (yield x + 1);
    var z = yield y / 3;
    return x + y + z;
  }
  let b = foo(5);
  let result = b.next();
  console.log(result);
  //  b.next() // { value:6, done:false }
  let result2 = b.next(12); // yield(x+1) = 12
  console.log(result2);
  //  b.next(12) // { value:8, done:false }
  let result3 = b.next(13);
  //  b.next(13) // { value:42, done:true }  z=yield(y/3)=13  5+24+13=42
  console.log(result3);
  // 如果向next()方法提供参数，返回结果就完全不一样了。上面代码第一次调用b的next()方法时，返回x+1的值6；
  // 第二次调用next()方法，将上一次yield表达式的值设为12，因此y等于24，返回y / 3的值8；
  // 第三次调用next()方法，将上一次yield表达式的值设为13，因此z等于13，这时x等于5，y等于24，所以return语句的值等于42。

  // 注意，由于next()方法的参数表示上一个yield表达式的返回值，所以在第一次使用next()方法时，传递参数是无效的。
  // V8 引擎直接忽略第一次使用next()方法时的参数，只有从第二次使用next()方法开始，参数才是有效的。
  // 从语义上讲，第一个next()方法用来启动遍历器对象，所以不用带有参数。
}

function* myGen() {
  yield 1;
  yield 2;
  return 1 + 2;
}
let gen = myGen();
let result = gen.next();
while (!result.done) {
  console.log(result);
  result = gen.next();
}

export {};
