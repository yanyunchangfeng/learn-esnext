


//Generator
{
     //genertaor基本定义
     let tell= function* (){
         yield 'a';
         yield 'b';
         return 'c'
     };
     let k = tell();
    //  console.log(k.next())   //{value: "a", done: false}
    //  console.log(k.next()) // {value: "b", done: false}
    //  console.log(k.next()) // {value: "c", done: true}
    //  console.log(k.next())      // {value: undefined, done: true}
}
{
    let obj = {};
    obj[Symbol.iterator] = function* (){
      yield 1;
      yield 2;
      yield 3;
    }
    for(let value of obj){
        // console.log(value) //1 2 3
    }
}

{
    let state = async function (){
        let a = 1;
           await (a = 50);
           await console.log(2);
           return a
    }
    let status = state();
    status.then(function(result){
     console.log(result)
    })
}

{
    let draw = function(count){
      //具体抽奖逻辑
      console.info(`剩余次数${count}`);

    }
    let residue = function* (count){
        while(count>0){
            count --;
            yield draw(count);
        }
    }
    let star = residue(5);
    let btn =document.createElement('button');
    btn.id = 'start';
    btn.innerHTML = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function(){
        star.next();
    })
}
{
   function timeout(ms){
       return new Promise(resolve=>{
           setTimeout(resolve,ms)
       });
   }
   async function fn (value,ms){
       await timeout(ms);
       console.log(1000)
       await timeout(ms*2);
       console.log(3000)
       await timeout(ms*3);
       console.log(6000)
       await timeout(ms*4);
       console.log(10000)
       console.log(value)
   }
   fn('hello yycf',1000)// 1000 3000 6000 10000 hello yycf
}
{
    //长轮训 比如说服务器的某一个数据状态定期的去变化，前端需要实时取状态 webSocket兼容性不好
    let ajax =function* (){
        yield new Promise(function(resolve,reject){
            //真实接口写在这里
           setTimeout(function(){
               resolve({code:1})
           },200)
        })
    }
    let pull = function(){
        let genertaor = ajax();
        let step =genertaor.next();
        step.value.then(function(d){
            if(d.code!=0){
                setTimeout(function(){
                  console.info('wait');
                  pull()
                },1000)
            }else{
                console.info(d)
            }
        })
    }
    pull()
}
//1.回顾一下ES6里面手动获得Iterator的例子
{
    let arr = [];
    for(let i = 0; i < 5; i++){
        arr.push('yycf' + i);
    }
    let iterator = arr[Symbol.iterator]();
    let result = iterator.next();
    while(!result.done){
        console.log(result)
// {value: "yycf0", done: false}
// {value: "yycf1", done: false}
// {value: "yycf2", done: false}
// {value: "yycf3", done: false}
// {value: "yycf4", done: false
        result = iterator.next();
    }
}
// 2. generator 基本用法
{
  function* testGenerator(){
     yield '燕' //通过yield 关键字来返回多个值，并且把函数的执行权限让出去
     yield '云'
     yield '长'
     yield '风'//返回一个字符串“风”出去，然后【让出】函数的执行权限，等待下一次next()调用
  }
  let iterator = testGenerator() //执行这个genernator函数返回迭代器对象
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
// {value: "燕", done: false}
// {value: "云", done: false}
// {value: "长", done: false}
// {value: "风", done: false}
// {value: undefined, done: true}
}


{
//3.generator只有调用next()才会返回下一个值，如果我们一直不调用next(),它会让出CPU执行时间
// 既然调用next()的时候才会继续执行下一步，那么利用这个特性，我们可以构建一个永不终止的generator函数
   function* naturalNumber(){
    let num =1;
    while(true){
        yield num;
        num++
    }
    //这是死循环，但是页面不会卡死，因为genernator通过yeild关键字让出了执行权限，js引擎不会认为这是一个死循环卡死在这里
   }
   const num = naturalNumber();
   console.log(num.next())
   console.log(num.next())
   console.log(num.next())
   console.log(num.next())
//    {value: 1, done: false}
//    {value: 2, done: false}
//    {value: 3, done: false}
//    {value: 4, done: false}
}
// 4.既然generato函数会返回一个迭代器对象，那么我们可以利用这个特性，来给某些对象加上iterator属性
// 利用Generator给自定义对象的接口实现Iterator接口
{  
   const user = {
       name:'yycf',
       age:26
   }
   user[Symbol.iterator] = function*(){
       for(let key in user){
           yield user[key]
       }
   }
   console.log(...user)//yycf 26
}
// 5. for of 会在内部隐含使用迭代器Iterator，所以可以直接用for...of来便历generator函数

{  
    function* foo(){
       for(let i = 0;i<3;i++){
           yield i 
       }
    }
   for(let value  of foo()){
       console.log(value)
    //    0
    //    1
    //    2
   }
}
// 6. Generator函数能互相调用吗？-->使用yield* 语法
{
    function* g1(){
       yield 1;
       yield 2;
       yield 3;
    }
    function* g2(){
        yield * g1()//把执行权限让给g1执行，直到g1把所有的值都输出后，再执行g2
        yield 4;
        yield 5;
        yield 6;
    }
    let iterator = g2();
    let result = iterator.next();
    while(!result.done){
        console.log(result)
//         {value: 1, done: false}
//         {value: 2, done: false}
//         {value: 3, done: false}
//         {value: 4, done: false}
//         {value: 5, done: false}
//         {value: 6, done: false}
        result = iterator.next()
    }


}
