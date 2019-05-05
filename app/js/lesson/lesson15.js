

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
               resolve({code:0})
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