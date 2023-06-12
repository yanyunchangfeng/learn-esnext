// const fs = require("fs");
// const path = require("path");

function fn(arg: any, callback: Function) {
  setTimeout(() => {
    let random = Math.random();
    if (random > 0.5) {
      callback(undefined, arg);
    } else {
      callback("error", undefined);
    }
  }, 1000);
}

const promisify = (fn: Function) => {
  // 高阶函数
  return function (...args: any[]) {
    return new Promise((res, rej) => {
      fn(...args, (err: any, data: any) => {
        if (err) return rej(err);
        res(data);
      });
    });
  };
};
const promisifyAll = (target: any) => {
  Reflect.ownKeys(target).forEach((key: any) => {
    if (typeof target[key] === "function")
      target[`${key}Async`] = promisify(target[key]);
  });
  return target;
};
// let obj = promisifyAll(fs);
// console.log(obj)
// obj.readFileAsync(path.join(__dirname, 'index.ts'), 'utf-8').then(data => {
//     console.log('promisifyAll', data)
// })
// const readFile = promisify(fs.readFile);
// readFile(path.join(__dirname, 'index.ts'), 'utf-8').then(data => {
//     console.log(data)
// })

// Promise.race 的实现原理
Promise.race = (promises: any[]) => {
  return new Promise((res, rej) => {
    for (let promise of promises) {
      if (Object.prototype.toString.call(promise) === "[object Promise]") {
        promise.then(res, rej);
      } else {
        res(promise);
      }
    }
  });
};
// Promise.all 的实现原理
Promise.all = <T>(promises: T[]): Promise<T[]> => {
  return new Promise((rs, rj) => {
    let count = 0;
    let result: any[] = [];
    let len = promises.length;
    if (!len) rs(result);
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then((res: any) => {
        count += 1;
        result[i] = res;
        if (count === len) rs(result);
      }, rj);
    });
  });
};

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("ok");
  }, 1000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("no ok");
  }, 2000);
});

Promise.race([p1, p2])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([p1, p2]).then(
  (data) => {
    console.log(data);
  },
  (err) => console.log(err)
);
