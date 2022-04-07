// abort方法就是不要promise这次成功的结果了
// 超时处理


let p1: any = new Promise((res, rej) => {
    setTimeout(() => res('success'), 3000)
})

const wrap = (p1) => { // p1 是用户的，我在内部再构建一个promise和用户传入的组成一对
    let abort: any;
    let p2: any = new Promise((res, rej) => { // 空的promise 没有任何含义
        abort = rej
    })
    let newP: any = Promise.race([p1, p2])
    newP.abort = abort;
    return newP
}
let p2 = wrap(p1)

setTimeout(() => {
    p2.abort('取消') // 如果超过两秒就让这个promise失败掉
}, 2000)

p2.then(data => {
    console.log(data, 'data')
}).catch(err => {
    console.log(err, 'err')
})

export { }