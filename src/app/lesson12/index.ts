{
  //基本定义和生成实例
  class Parent {
    name;
    constructor(name = "yycf") {
      this.name = name;
    }
  }
  let yycf = new Parent();
  console.log(yycf); //Parent {name: "yycf"}
}
{
  //继承
  class Parent {
    name;
    constructor(name = "yycf") {
      this.name = name;
    }
  }
  class Child extends Parent {}
  let ychild = new Child();
  console.log("extends", ychild); //extends Child {name: "yycf"}
}
{
  //继承传递参数
  class Parent {
    name;
    constructor(name = "yycf") {
      this.name = name;
    }
  }
  class Child extends Parent {
    type;
    constructor(name = "yycfchild") {
      //在定义自己属性的时候，调用this，一定要放在super后，
      super(name); //换句话说 在继承关系中，子类构造函数如果用super传递参数，super一定要放在构造函数第一行
      this.type = "child";
    }
  }
  let ychild = new Child();
  console.log("extends", ychild); //extends Child {name: "yycfchild",type: "child"}
}

{
  // getter setter
  class Parent {
    name;
    constructor(name = "yycf") {
      this.name = name;
    }
    // 这是属性，不是方法
    get longName() {
      return "yycf" + this.name;
    }
    // 这是属性，不是方法
    set longName(value) {
      this.name = value;
    }
  }
  let y = new Parent();
  console.log("getter", y.longName); //getter yycfyycf
  console.log("setter", (y.longName = "yycf")); //setter yycf
}

{
  // 静态方法
  class Parent {
    name;
    constructor(name = "yycf") {
      this.name = name;
    }
    static tell() {
      console.log("this is tell fn");
    }
  }
  console.log(Parent.tell()); //this is tell fn
}

{
  //静态属性
  class Parent {
    static type;
    name;
    constructor(name = "yycf") {
      this.name = name;
    }
  }
  Parent.type = "test";
  console.log("静态属性", Parent.type); //静态属性 test
}

// 类的属性

class Test {
  a = "2";
  b = "5";
  static a = 1;
}
let t1 = new Test();

console.log(t1); //Test {a: "2", b: "5"}
console.log(Test.a); //1

// import {makeWb,pinyin} from 'convert-zh-cn';
// pinyin.getCamelChars()
// console.log(pinyin)
// {
//     var keyword = document.getElementById('keyword');
//     keyword.addEventListener('blur',()=>{
//       console.log('blur')
//         let  full = pinyin.ge(keyword['value'])
//         let simple = pinyin.getCamelChars(keyword['value'])
//         console.log(full,simple)
//         var result = makeWb(keyword['value'])
//         console.log(result)
//     })
// }

var spArray = function (N, Q) {
  var R = [],
    F;
  for (F = 0; F < Q.length; ) {
    R.push(Q.slice(F, (F += N)));
  }
  return R;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log(spArray(5, arr));
