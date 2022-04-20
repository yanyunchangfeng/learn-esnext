// 高阶函数 “2"个特点满足一个就是高阶函数 1） 我们给一个函数传入一个函数 回调 2. 一个函数返回一个函数

// 装饰器模式 （对原本的功能进行包装）

function core(a, b, c) {
    // todo...
    console.log('core .......', a, b, c)
}
// 每个类都有一个原型，所有实例都有一个属性__proto__
Function.prototype.before = function (beforeFn) {
    // this = core 
    return (...args) => { //箭头函数中没有this 没有arguments 没有prototype
        beforeFn()
        this(...args)
    }
}
let newFn = core.before(() => {
    console.log('core before')
})
newFn(1, 2, 4)


// 闭包 1） 定义函数的作用域 和调用的作用域不是同一个

