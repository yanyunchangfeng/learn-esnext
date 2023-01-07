// generator 的实现原理  指针 + switch - case

// function* gen() {
//     yield 1
//     yield 2
//     yield 3
//     return 4
// }
export {};

function gen$(context) {
  // while (true) {
  switch ((context.prev = context.next)) {
    case 0:
      context.next = 1;
      return 1;
    case 1:
      context.next = 2;
      return 2;
    case 2:
      context.next = 3;
      return 3;
    case 3:
      context.stop();
      return 4;
  }
  // }
}

function gen() {
  const context = {
    prev: 0, // 当前要运行的
    next: 0, // 下一次要运行的
    done: false, // 是否完成运行
    stop() {
      this.done = true; // 更改完成状态
    },
  };
  return {
    next() {
      const value = gen$(context); // 将上下文传入
      return {
        value,
        done: context.done,
      };
    },
  };
}

const it = gen();
let result = it.next();
while (result.done !== true) {
  console.log(result, "result");
  result = it.next();
  if (result.done) console.log(result, "end");
}

function p1() {
  return new Promise((res, rej) => {
    setTimeout(() => res("p1"), 3000);
  });
}
function p2() {
  return new Promise((res, rej) => {
    setTimeout(() => rej("p2"), 3000);
  });
}

function* read() {
  //switch - case => babel编译后就是把一个函数分成多个case 采用指针的方式向下移动
  let rp1 = yield p1();
  let rp2 = yield p2();
  return rp1 + rp2;
}

function co(it) {
  // 异步迭代采用函数的方式
  return new Promise((res, rej) => {
    function step(data?) {
      const { done, value } = it.next(data);
      if (!done) {
        Promise.resolve(value).then((data) => {
          step(data);
        }, rej);
      } else {
        res(value); // 将最终的结果抛出去
      }
    }
    step();
  });
}

let res = co(read());
res
  .then((data) => {
    console.log(data, "---");
  })
  .catch((err) => {
    console.log(err, "err");
  });
