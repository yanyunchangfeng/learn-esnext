// import './app/lesson/lesson1';
// import html2Canvas from 'html2canvas';
// import './app/lesson/lesson2';      
// import './app/lesson/lesson3';      
// import './app/lesson/lesson4';      
// import './app/lesson/lesson5';      
// import './app/lesson/lesson6';      
// import './app/lesson/lesson7';      
// import './app/lesson/lesson8';      
// import './app/lesson/lesson9';      
// import './app/lesson/lesson10';      
// import './app/lesson/lesson11';      
// import './app/lesson/lesson12';      
// import './app/lesson/lesson13';      
// import './app/lesson/lesson14';   
// import './app/lesson/lesson15';     
// import './app/lesson/lesson16';
// import './app/lesson/lesson18';
// import './app/lesson/lesson20';
// import './app/lesson/lesson21';
// import './app/lesson/lesson22';
import './app/lesson/lesson23';
// import './app/lesson/lesson-m1';
// import './app/lesson/lesson-m2';
// import './app/lesson/lesson-m3';
// import './app/lesson/lesson18';
// import{A,test ,Hello} from  './app/js/lesson/lesson17'; 
// import * as lesson from './app/lesson/lesson17'
// 问题1 假如一个模块有上百个变量 ，引入麻烦
//问题2 假如只关心一个
// import  lesson17 from './app/lesson/lesson17';
// console.log(lesson.H)
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
// console.log(lesson17)

// const bigint1: bigint = 999999999999999999n;

// var i = 0;

// class Example {
//     static prop = i++;
// }
// let e = new Example();
// // console.dir(e)
// console.dir(Example.prop=2)

// import './index.less';

// window['downloadCert'] = () => {
//   let certList = Array.from(document.querySelectorAll('.cert-container'));
//   certList.map((val:any) => {
//     html2Canvas(val, {useCORS: true, width:842,height:595, windowWidth: document.body.scrollWidth, windowHeight: document.body.scrollHeight, x: 0, y: window.pageYOffset })
//       .then(canvas => {
//         // document.body.appendChild(canvas)
//         const link = document.createElement('a');
//         link.href = canvas.toDataURL();
//         link.setAttribute('download', '证书');
//         document.body.appendChild(link);
//         link.click()
//         document.body.removeChild(link)
//       })
//   })
// }


// const low = require('lowdb');

// import lodash from 'lodash'
// const path = require('path');
// console.log(Low,JSONFile)
// console.log("jianba ~🚀: JSONFile", JSONFile);
// console.log("jianba ~🚀: Low", Low);



let grpc = async () => {
   return new Promise((res, rej) => {
      setTimeout(() => {
         console.log('我是grpc 调用')
         res(1)
      },3000)
   })
}

let engine = async () => {
   return new Promise((res, rej) => {
      setTimeout(() => {
         console.log('我是engine 调用')
         res(1)
      },3000)
   })
}

let startthen = async () => {
   grpc().then(() => {
      console.log('grpc 调用完成')
      engine()
   })
   console.log('11222222')
}
let startawait = async () => {
   await grpc()
   console.log('b')
   await engine()
   console.log('11222222')
}
startthen()
// startawait()