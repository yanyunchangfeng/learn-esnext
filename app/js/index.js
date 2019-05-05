import 'babel-polyfill'; 
// import './lesson/lesson1';
// import './lesson/lesson2';      
// import './lesson/lesson3';      
// import './lesson/lesson4';      
// import './lesson/lesson5';      
// import './lesson/lesson6';      
// import './lesson/lesson7';      
// import './lesson/lesson8';      
// import './lesson/lesson9';      
// import './lesson/lesson10';      
// import './lesson/lesson11';      
// import './lesson/lesson12';      
// import './lesson/lesson13';      
// import './lesson/lesson14';   
// import './lesson/lesson15';     
// import './lesson/lesson16';     
// import{A,test ,Hello} from  './lesson/lesson17'; 
// import * as lesson from './lesson/lesson17'
// 问题1 假如一个模块有上百个变量 ，引入麻烦
//问题2 假如只关心一个
import lesson17 from './lesson/lesson17';
// import './lesson/lesson18';
// test();  
// console.log(A)   //456
// console.log(test)   //ƒ test() {
   // A = 456;
 // }
// console.log(Hello)  //ƒ Hello() {
    // _classCallCheck(this, Hello);
//   }

// console.log(lesson)

// Module {__esModule: true, Symbol(Symbol.toStringTag): "Module"}A: (...)Hello: (...)test: (...)Symbol(Symbol.toStringTag): "Module"__esModule: trueget A: ƒ ()get Hello: ƒ ()get test: ƒ ()__proto__: Object

// console.log(lesson17.A) //123
// console.log(lesson17.test()) //456
// console.log(lesson17.Hello)
console.log(lesson17)