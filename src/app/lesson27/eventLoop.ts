
Promise.resolve().then(() => {
    console.log('Promise1')
    setTimeout(() => {
        console.log('setTimeout2')
    }, 0)
})

setTimeout(() => {
    console.log('setTimeout1')
    Promise.resolve().then(() => {
        console.log('Promise2')
    })
})

// 宏任务队列 【setTimeout1 setTimeout2】
// 微任务队列 【Promise1 Promise2】

// 先执行一次宏任务 然后清空微任务队列中的Promise1 因此先输出Promise1 再执行宏任务1=>输出setTimeout1 清空微任务队列中的Promise2输出Promise2
// 最后再执行宏任务setTimeout2输出setTimeout2