const fs = require("fs");
const path = require("path");

function fn(arg, callback) {
  setTimeout(() => {
    let random = Math.random();
    if (random > 0.5) {
      callback(undefined, arg);
    } else {
      callback("error", undefined);
    }
  }, 1000);
}

const promisify = (fn) => {
  // 高阶函数
  return function (...args) {
    return new Promise((res, rej) => {
      fn(...args, (err, data) => {
        if (err) return rej(err);
        res(data);
      });
    });
  };
};
const promisifyAll = (target) => {
  Reflect.ownKeys(target).forEach((key: string) => {
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
