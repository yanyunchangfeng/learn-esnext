Promise.resolve().then(() => {
    console.log('then1');
    Promise.resolve().then(
        () => {
            console.log('then1-1')
            return Promise.resolve() // x.then() =>      x.then().then() 如果一个promise里面返回一个promise 它会让这个promise延迟执行 相当于在外面再套一层微任务
        }
    ).then(() => {
        console.log('then1-2')
    })
})
    .then(() => {
        console.log('then2')
    })
    .then(() => {
        console.log('then3')
    })
    .then(() => {
        console.log('then4')
    })
    .then(() => {
        console.log('then5')
    })
     // promise + 遵循 ecmascript262规范
     // 默认会先注册这第一个then方法 then1 then-1-1  then2 then3 then4 then1-2 then5
     // [then1-1 then2]
    //  [x.then ,then3]
    //   [then3] x.then 什么都没做所以会打印then3
    // [then1-2 , then4]


    // 微任务执行的顺序是按照放置的顺序