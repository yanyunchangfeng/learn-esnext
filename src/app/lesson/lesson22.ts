
// Idle
// 这是一个全局属性 
// 我作为用户，告诉浏览器，我现在执行callback函数，但是它的优先级比较低，告诉浏览器，可以空闲的时候执行callback
// 然而如果到了超时时间了，就必须马上执行
// window.requestIdleCallback(callback, { timeout: 1000 });
const sleepDelay = (delay) => {
    for (let start = Date.now(); Date.now() - start <= delay;);
}
// fiber是把整个任务分成很多个小任务，每次执行一个任务
// 执行完成后会看看有没有剩余时间，如果有继续下一个任务，如果没有放弃执行，交给浏览器进行调度，等待下次执行
let allStart = Date.now()
let works = [
    () => {
        console.log('第1个任务开始')
        sleepDelay(20) //一帧16.6 因为此任务的执行时间已经超过了16.6毫秒，所以需要把控制权交给浏览器
        console.log('第1个任务结束')
    },
    () => {
        console.log('第2个任务开始')
        sleepDelay(20)
        console.log('第2个任务结束')
    },
    () => {
        console.log('第3个任务开始')
        sleepDelay(20)
        console.log('第3个任务结束')
        console.log(Date.now() - allStart)
    }
]
// deadline是一个对象 有两个属性
// timeRemaining() 可以返回此帧还剩下多少时间供用户使用
// didTimeout 此callback任务是否超时
const workLoop = (deadLine:IdleDeadline) => {
    // 如果此帧的剩余时间超过0，或者此任务已经超时了
    console.log(`本帧的剩余时间为${parseInt(deadLine.timeRemaining() as any)}`);
    while ((deadLine.timeRemaining() > 0 || deadLine.didTimeout) && works.length > 0) {
        performUnitOfWork()
    }// 如果说没有剩余时间了，就需要放弃执行任务控制权，执行权交还给浏览器
    if (works.length > 0) { // 说明还有未完成的任务
        window.requestIdleCallback(workLoop, { timeout: 1000 })
    }
}
const performUnitOfWork = () => {
    works.shift()()
}
window.requestIdleCallback(workLoop,{timeout:1000})

