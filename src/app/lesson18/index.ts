{
  function sleep1(duration: number) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, duration);
    });
  }
  async function foo1() {
    console.log("a");
    await sleep1(2000);
    console.log("b");
  }

  // foo1()
  // 先输出a
  // 2 秒后输出b
}

{
  function sleep(duration: number) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, duration);
    });
  }
  async function foo<T>(name: T) {
    await sleep(2000);
    console.log(name);
  }
  async function foo2() {
    await foo("a");
    await foo("b");
  }
  foo2();
  //2秒 后输出a
  //又两秒后输出 b
}

const fetchData = (data: any) =>
  new Promise((resolve) => setTimeout(resolve, 1000, data + 1));

const fetchValue = async function () {
  var value1 = await fetchData(1);
  var value2 = await fetchData(value1);
  var value3 = await fetchData(value2);
  console.log(value3);
};

fetchValue();
// 大约 3s 后输出 4
// async 编译后的代码
//async + await  === generator + co
// async + await  是generator的语法糖
function _asyncToGenerator(fn: Function) {
  return function (this: any, ...args: any[]) {
    let genFn = fn.apply(this, args);
    return new Promise((res, rej) => {
      function step(key: string, arg?: any) {
        try {
          var { value, done } = genFn[key](arg);
        } catch (err) {
          return rej(err);
        }
        if (!done) {
          Promise.resolve(value).then(
            (data) => {
              step("next", data);
            },
            (err) => {
              step("throw", err);
            }
          );
        } else {
          res(value);
        }
      }
      step("next");
    });
  };
}

export {};
