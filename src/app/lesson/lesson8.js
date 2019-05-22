
//对象的扩展
{
  // 简介表示法
  let o = 1;
  let k = 2;
  let es5 = {
      o:o,
      k:k
  };
  let es6 ={
      o,
      k
  };
  console.log(es5,es6)//{o: 1, k: 2} {o: 1, k: 2}

  //如果对象中有fn 
  let es5_moethod={
      hello:function(){
          console.log('hello')
      }
  }
  let es6_method={
      hello(){
          console.log('hello')
      }
  }
  console.log(es5_moethod,es6_method)//{hello: ƒ} {hello: ƒ}
}

{
    //属性表达式
    let a = 'yycf';
    let es5_obj={
        a:'b'
    }
    let es6_obj={
        [a]:'c'
    }
    console.log(es5_obj,es6_obj) //{a: "b"} {yycf: "c"}
}

{
    //Object新增的API
    console.log(Object.is('abd','abd')) //true 等价于 ===
    console.log(Object.is('123',123)) //false
    console.log(Object.is([],[])) //false
    console.log(Object.assign({a:'a'},{b:'b'}));//浅拷贝
    let test ={
        k:123,
        o:456
    }
    for(let [key,val] of Object.entries(test)){
        console.dir(Object.entries(test)) // [['k',123],['o',456]]
        console.log([key,val]) //["k", 123] ["o", 456]

    }
}
{
    //扩展运算符
    let {a,b,...c} = {a:'yycf',b:'yanyunchangfeng',c:'cfjwl',d:'cdymg'};
    console.log(c) //{c: "cfjwl", d: "cdymg"}
}
