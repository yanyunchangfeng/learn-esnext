//字符串的扩展

{
  console.log("a", "\u0061"); // a a
  console.log("a", "\u20bb7"); //a ₻7
  console.log("a", "\u{20bb7}"); //在es6中如何处理大于 0xff 字符 a 𠮷
}
{
  let s = "𠮷b";
  console.log("length", s.length); //length 3
  console.log(s.charAt(0)); //�
  console.log(s.charAt(1)); //�
  console.log(s.charCodeAt(0)); //55362 只取两个字节
  console.log(s.charCodeAt(1)); //57271

  console.log(s.codePointAt(0)); //取四个字节 134071
  console.log(s.codePointAt(0).toString(16)); //取四个字节 //20bb7
  console.log(s.codePointAt(1)); //57271   取'𠮷'后两个字节
  console.log(s.codePointAt(2)); //97
}
{
  console.log(String.fromCharCode("0x20bb7" as any)); //ஷ
  console.log(String.fromCodePoint("0x20bb7" as any)); //𠮷
}
{
  let str = "\u{20bb7}abc";
  //便历字节长度大于2个字节的字符串方法
  for (let i = 0; i < str.length; i++) {
    console.log("es5", str[i]);
    //�
    //�
    //a
    //b
    // c
  }
  for (let code of str) {
    console.log("es6", code);
    // 𠮷
    // a
    // b
    // c
  }
}

{
  let str = "yanyunchangfeng";
  console.log("include", str.includes("c")); //true
  console.log("start", str.startsWith("y")); //true
  console.log("end", str.endsWith("ng")); //true
}
{
  let str = "yanyunchangfeng";
  console.log(str.repeat(3)); //yanyunchangfengyanyunchangfengyanyunchangfeng
}
{
  let name = "yanyunchangfeng";
  let info = "长风几万里，吹度玉门关。";
  console.log(`I am  ${name}, ${info}`); //I am  yanyunchangfeng, 长风几万里，吹度玉门关。
}
{
  //补白 第一个参数是字符串长度，第二个是补白的字符
  console.log("1".padStart(3, "0")); //001
  console.log("1".padEnd(3, "0")); //100
}
{
  //标签模板
  let user = {
    name: "yycf",
    info: "cfjwl,cdymg",
  };
  console.log(abc`I am${user.name}${user.info}`); //I am,,yycfcfjwl,cdymg
  //两个作用 1.防止xss 攻击
  //做多语言的国际化
  function abc(s, v1, v2) {
    console.log(s);
    console.log(String(s)); // I am,,
    console.log(v1); //yycf
    console.log(v2); //cfjwl,cdymg
    return s + v1 + v2;
  }
}

{
  console.log(String.raw`3\n ${5 + 5}`); //把换行符前加了\做了转义 //3\n 10
  console.log(`3\n${5 + 5}`); //3
  //10
}
