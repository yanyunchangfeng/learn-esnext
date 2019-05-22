

function first(){
    // for(let i = 0;i<3;i++){
    //     console.log(i)
    // }
    // console.log(i); 报错
    // let a = 1;
    // let a = 2; // 使用let ，不能重复定义变量
}
function last(){
//const PI = 3.14;
//PI = 3.14159;  //使用const定义的变量保存在本地的不能修改
//const PI;
//PI =3.14;  //报错，常量声明必须赋值
  const obj = {
      a:3
  }
  obj.b = 4; //引用类型可已修改，因为对象保存的是地址
  console.log(obj)
}
first()
last()