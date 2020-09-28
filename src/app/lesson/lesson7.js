//函数的扩展
{
      //默认值后不能有没有默认值的变量
        function test(x,y = 'yanyunchangfeng'){
            console.log(x,y)
        }
        test('hello') //  hello yanyunchangfeng
        test('hello', 'yycf') //hello yycf
}

{
  let x = 'test';
  function test(x,y=x){
     console.log('scope',x,y);

  }
  test('yycf') //scope yycf yycf
  test() // scope undefined undefined
  function test1(c,y=x){
    console.log('scope',c,y)
   //scope d test
  }
  
  test1('d') //scope d test
}

{
    //rest 参数后不能有其他参数 ，因为在转换为数组时，不知道到什么时候截止
    function test(...arg){
      for(let v of arg){
          console.log(v) // 1,3,5,7,8
      }
    }
    test(1,3,5,7,9)
}

{
    //扩展运算符  可以看做reset 参数的逆应用
    console.log(...[1,2,3,4]) // 1 2 3 4
    console.log('a',...[1,2,3,4]) //a 1 2 3 4
}

{
    let arrow = v => v*2;
    console.log(arrow(3)) //6
}

{
    //尾调用 函数的最后一句话是不是一个函数

    function tail(x){
        console.log('tail',x);

    }
    function fx(x){
        return tail(x)
    }
    fx(666) // tail 666
   // 好处：提升性能,递归·函数地嵌套，耗费资源
}

