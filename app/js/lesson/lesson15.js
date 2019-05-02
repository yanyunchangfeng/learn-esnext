

//Generator
{
     //genertaor基本定义
     let tell= function* (){
         yield 'a';
         yield 'b';
         return 'c'
     };
     let k = tell();
     console.log(k.next())   //{value: "a", done: false}
     console.log(k.next()) // {value: "b", done: false}
     console.log(k.next()) // {value: "c", done: true}
     console.log(k.next())      // {value: undefined, done: true}
}
{
    let obj = {};
    obj[Symbol.iterator] = function* (){
      yield 1;
      yield 2;
      yield 3;
    }
    for(let value of obj){
        console.log(value) //1 2 3
    }
}

{
    // let state = async function (){
    //     while(1){
    //         await 'A';
    //         await 'B';
    //         await 'C';
    //     }
    // }
    // let status =state();
    // console.log(status.next())
    // console.log(status.next())
    // console.log(status.next())
    // console.log(status.next())
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