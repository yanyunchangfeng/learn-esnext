//正则的扩展
{   //构造函数的扩展
    let reg = new RegExp('abc','i');  //es5
    let reg1 = new RegExp(/abc/i);  //es5
    console.log(reg,reg1);// /abc/i /abc/i
    console.log(reg.test('abc124'),reg1.test('abc123')) // true true 

    let reg2 = new RegExp(/abc/ig,'i');  // es5 只能指定一个参数 es6能指定第二个参数为修饰符，会覆盖第一个参数修饰符
    console.log(reg2.flags) //i

}
{
    //带y 的修饰符
    let s ='aaa_aa_a';
    let a1 = /a+/g;
    let a2 = /a+/y;
    console.log('one',a1.exec(s),a2.exec(s))//["aaa", index: 0, input: "aaa_aa_a", groups: undefined] ["aaa", index: 0, input: "aaa_aa_a", groups: undefined]
    console.log('two',a1.exec(s),a2.exec(s))//two ["aa", index: 4, input: "aaa_aa_a", groups: undefined] null
    //第一步都匹配到aaa
    //第二步只有g匹配
    // 相同点，两个都是全局匹配,
    // 不同点 g不强调必须是匹配的下一个字符的开始处，y必须紧跟着的下个字符开始匹配 

    console.log(a1.sticky,a2.sticky) //判断是否开启带y修饰符的作用 // false true


}
{
    //带 u 的修饰符 处理unicode
   console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A')); //4个字节当成两个字母或两个字符 u-1 true
   console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));//4个字节当做一个字符 u-1 false

   console.log(/\u{61}/.test('a')) // false 大括号包起来的内容被当做unicode字符 如果不加u 不会被识别
   console.log(/\u{61}/u.test('a'))// true

   console.log(`\u{20BB7}`); //𠮷
   let s  = '𠮷';
   console.log('u',/^.$/.test(s)) //false
   console.log('t u-1',/^.$/u.test(s)) //如果字符大于两个字节，一定要加u修饰符 //true
   console.log('test u-1',/𠮷{2}/.test('𠮷𠮷')) //如果字符大于两个字节，一定要加u修饰符 //false
   console.log('test u-2',/𠮷{2}/u.test(s)) //如果字符大于两个字节，一定要加u修饰符  //true


}
{
    //带 s 的修饰符  . 不能匹配换行符，回车符

    console.log(/^.$/.test('\n'))//false
    console.log(/^.$/.test('\r'))//false
    console.log(/^.$/s.test('\n'))//true
    console.log(/^.$/s.test('\r'))//true



  

}