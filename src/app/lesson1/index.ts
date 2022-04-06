

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
  const obj:any = {
      a:3
  }
  obj.b = 4; //引用类型可已修改，因为对象保存的是地址
  console.log(obj)
}
first()
last()
 const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = "RIGHT",
}

const value = 'UP';
if(value === Direction.Up){
  console.log('go up!')
}

// 不加const 编译结果 var Direction;
// (function (Direction) {
//     Direction["Up"] = "UP";
//     Direction["Down"] = "DOWN";
//     Direction["Left"] = "LEFT";
//     Direction["Right"] = "RIGHT";
// })(Direction || (Direction = {}));
// var value = 'UP';
// if (value === Direction.Up) {
//     console.log('go up!');
// }



// 加上const 后的编译结果 var value = 'UP'; 这样的好处是可以节省一点代码
// if (value === "UP" /* Up */) {
//     console.log('go up!');
// }


// 有时候我们希望使用 const enums 保留这种映射, 可以在 tsconfig.json 中设置preserveConstEnums": true, 
// var Direction;
// (function (Direction) {
//     Direction["Up"] = "UP";
//     Direction["Down"] = "DOWN";
//     Direction["Left"] = "LEFT";
//     Direction["Right"] = "RIGHT";
// })(Direction || (Direction = {}));
// const value = 'UP';
// if (value === "UP" /* Up */  # 依然是内联) {
//     console.log('go up!');