// process.nextTick()

// 1. node 基于v8引擎的 libuv库提供的(非阻塞i/o)
// 同步代码执行完毕后 再执行异步代码
// node中也有一个自己的事件环 包含了i/o 操作  从node10以上都和浏览器的执行顺序一致

// -> timers setInterval 定时器
// -> poll 阶段 轮询 会在特定的时候进行阻塞 执行i/o 回调
// -> check setImmediate (每个宏任务执行完毕后都会清空微任务)

// 根据性能影响 执行的顺序会有所不同
setImmediate(() => {
  console.log("immediate");
});
setTimeout(() => {
  console.log("timeout");
}, 0);

// const fs = require('fs')
// const path = require('path')
// fs.readFile(path.join(__dirname, 'index.ts'), () => { // i/o 轮训时会执行i/o回调 如果没有定义setImmediate 会等待剩下的i/o 完成 或者定时器到达时间
//     setTimeout(() => {
//         console.log('timeout')
//     })
//     setImmediate(() => {
//         console.log('immediate')
//     })
//     // 先输出immediate 再输出timeout
// })

Promise.resolve().then(() => {
  console.log("promise");
});
process.nextTick(() => {
  // 当前执行栈中执行完毕后 立即调用的 （微任务）
  console.log("nextTick");
});

// timer 和 setImmediate 调用时机不同
// process.nextTick 当前同步代码执行完毕后 立即调用的 微任务
// i/o文件读写自动会放到poll阶段中处理
// setImmediate 用的非常少

// poll 里面有很多回调 node中有执行的最大个数，超过最大个数会被延迟到下一轮循环执行
