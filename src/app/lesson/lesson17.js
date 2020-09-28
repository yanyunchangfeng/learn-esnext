


// ES6 模块化
// 1.方式1
export let A = 123;
export function test(){
    A  = 456    

}
export class Hello{
   test(){
       console.log('test fn')
   }
}
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
