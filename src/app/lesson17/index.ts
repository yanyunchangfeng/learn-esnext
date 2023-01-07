// ES6 模块化
// 1.方式1
export let A = 123;
export function test() {
  A = 456;
}
export class Hello {
  test() {
    console.log("test fn");
  }
}
// import{A,test ,Hello} from  './app/lesson17';
// import * as lesson from 'src/app/lesson17'
// import lesson17 from 'src/app/lesson17';
// console.log(lesson.A,lesson17.A)
// 问题1 假如一个模块有上百个变量 , 引入麻烦
// 问题2 假如只关心一个
//这样写的好处
// 1.不会因为误操作，把一些变量导出了
// 2.通过我想export default可以 由第三方引用的时候，不需要知道你的变量名称，简洁
// let A = {};
// let test =()=>{
//     A =  456;
//   return A
// }
// class Hello{
//     test(){
//         console.log('yycf')
//     }
// }
// export default {
//    A,
//    test,
//    Hello
// }
