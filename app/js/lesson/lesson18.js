// 类的属性

class Test{
    a = "2";
    b = "5";
    static a = 1
}
let t1 = new Test();

console.log(t1)//Test {a: "2", b: "5"}
console.log(Test.a)//1