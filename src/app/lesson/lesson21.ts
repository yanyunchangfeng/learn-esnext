

// rAf的用法 页面上绘制一个进度条 值0%=>100%
let btn = document.getElementById('btn')
let processBar = document.getElementById('process-bar')
let start;

const ProcessExecution = () => {
    processBar.style.width = String(processBar.offsetWidth + 1) + 'px'
    processBar.innerHTML = processBar.offsetWidth + '%' //修改文本为百分比
    if (processBar.offsetWidth < 100) {
        let current = Date.now();
        //假如说浏览器本身的任务执行时间是5ms
        console.log(current - start);// 打印的是开始准备执行的时间到真正执行的时间的时间差
        start = current
        requestAnimationFrame(ProcessExecution)
    }
}
btn.addEventListener('click', () => {
    processBar.style.width = '0'; //先把宽度清除 rAf 后面会用到
    let current = Date.now();
    start = current
    requestAnimationFrame(ProcessExecution);
})

// q1 浏览器刷新频率怎么和屏幕的刷新频率同步的  vSync标识符 显卡会在每一帧开始时间给浏览器发送一个vSync标识符 浏览就知道自己要开始渲染了
// 帧率是动态调整的 说16.66只是方便学习理解 其实是看浏览器调度的


