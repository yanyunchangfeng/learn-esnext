document.body.style.background = 'red';
console.log(1)
Promise.resolve().then(() => {
    console.log(2)
    document.body.style.background = 'yellow';
})
// setTimeout(() => {
//     console.log(2)
//     document.body.style.background = 'yellow'
// }, 0);
console.log(3)
// 1 3 2 页面背景是一直是黄色 因为先执行完微任务队列 再进行GPU渲染
// 换成定时器 不停地刷新页面 会偶现红色 这也再次印证了渲染时机永远是在微任务执行之后再执行