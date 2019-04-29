// 解构赋值， 左边一种结构，右边一种结构，左右一一对应进行赋值

//1.数组解构赋值

{
  let a,b ,rest;
  [a,b] = [1,2];
  console.log(a,b)
}
{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(rest)  //[3,4,5,6]
}
{
    let a,b ,c ,rest;
    // ({a,b,c} = {a:1,b:2});
    // console.log(a,b,c); //1 2 undefined
    ({a,b,c=3} = {a:1,b:2,c:3});
    console.log(a,b,c) //1,2,3
}

{
//    用解构交换两数位置
    let a=1,b=2;
    [a,b]= [b,a];
    console.log(a,b)// 2,1

}
{
    function fn (){
        return [1,2];
    }
    let a,b;
    [a,b] = fn();
    console.log(a,b)
}

{
    function fn (){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b] = fn();
    console.log(a,b);
    //选择性的接收我想要的
}


{
    let a,b ;
    ({a,b} = {a:1,b:2});
    console.log(a,b)
}
//2.对象解构赋值
{
    let obj ={n:666,b:true};
    let {n,b} = obj;
    console.log(n,b)
}

{
    let {a = 10,b} = {a:5,b:6};
    console.log(a,b) //5,6
}
{
    let yycfMeta = {
        title:'yycf',
        yycf:[
            {
                title:'yanyunchangfeng',
                desc:'yycf666'
            }
        ]
    };
    let {title:yycf,yycf:[{title:yanyunchangfeng}]} = yycfMeta;
    console.log(yycf,yanyunchangfeng)
}

//3.字符串解构赋值
{
    let [a,b] = 'ab'
    console.log(a,b)
}

//4.布尔值解构赋值
{
    let [a,b] = [true,false];
    console.log
    (a,b)
}

//5.函数解构赋值
{
    function fn (){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,...b] = fn();
    console.log(a,b);
    //只关心第一个，其他的放在数组b中
}

//6.数值解构赋值
{
    let [a,b] = [6666,666];
    console.log(a)
}

