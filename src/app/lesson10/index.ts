// Set Map WeakSet WeakMap

{
  let list = new Set();
  list.add(5);
  list.add(7);
  console.log(list.size); //2
}
{
  let arr = [1, 2, 3, 4, 5];

  let list = new Set(arr);
  arr = [];
  console.log(list.size, list); //5
}
{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.log(list.size); //2
  let arr = [1, 2, 1, 2, 4, 4, "2"];
  let list1 = new Set(arr);
  console.log(list1); //Set(3) {1, 2, 4,'2'} 无法过滤数据类型不一样的 注意2 和'2'
  //这个特性可以去重，不过效率没有hash算法高
}
{
  let arr = ["add", "delete", "has", "clear"];
  let list = new Set(arr);
  console.log("has", list.has("add")); //has true
  console.log("delete", list.delete("add"), list); //delete true Set(3) {"delete", "has", "clear"}
  for (let key of list.keys()) {
    console.log("key", key); //key delete
    // key has
    // key clear
  }

  for (let value of list.values()) {
    console.log("value", value); //value delete
    // value has
    // value clear
  }

  for (let value of list) {
    console.log("value", value); //value delete
    // value has
    // value clear
  }
  for (let [key, value] of list.entries()) {
    console.log("key-value", key, value); // key-value delete delete
    // key-value has has
    // key-value clear clear
  }
  list.forEach((item) => console.log(item)); // delete has clear
  list.clear();
  console.log(list); //Set(0) {}
}

{
  // 1.WeakSet的元素必须是obj ,对象中存储的对象值都是被弱引用的, 如果没有其他的变量或属性引用这个对象值, 则这个对象值会被当成垃圾回收掉. 正因为这样, WeakSet 对象是无法被枚举的, 没有办法拿到它包含的所有元素.
  //没有size ，不能使用clear
  //不能便历
  let arr = { a: 1, b: 2 };
  let weakList = new WeakSet();
  weakList.add(arr);
  // arr = null;
  console.log(weakList); //WeakSet

  //    WeakSet
  //__proto__: WeakSet
  //[[Entries]]: Array(1)
  //0:
  //value: {a:1,b:2}
  //length: 1
  // weakList.add(1)//报错 基础类型的值无效
}
{
  // map的key可以是任意类型
  let map = new Map();
  let arr = ["123"];
  map.set(arr, 9);
  console.log("map", map.get(arr)); //map 9
}
{
  // Map实例 会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作。
  // 映射实例可以提供一个迭代器(Iterator),能以插入顺序生成[key,value]形式的数组。可以通过entries()方法(或者Symbol.iterator属性，它引用entries())取得这个迭代器
  let map = new Map([
    ["a", 123],
    ["b", 456],
  ]);
  console.log("size", map.size); // size 2
  console.log(map.entries === map[Symbol.iterator]); // true
  for (let pair of map.entries()) {
    console.log(pair); //  ['a', 123]  ['b', 456]
  }
  for (let pair of map[Symbol.iterator]()) {
    console.log(pair); //  ['a', 123]  ['b', 456]
  }
  // 因为entries()是默认迭代器，所以可以直接对映射实例使用扩展操作，把映射转换为数组
  console.log([...map]); // [ ['a', 123],  ['b', 456] ]
  // 不使用迭代器，而是使用回调方式 ，则可以调用映射的forEach
  map.forEach((val, key) => console.log(val, key)); // 123 'a' 456 'b'
  // keys()和values() 分别返回已插入顺序生成键和值的迭代器
  // 键和值在迭代器遍历时是可以修改的，但映射内部的引用则无法修改。当然，这并不妨碍修改作为键或值的对象内部的属性，因为这样并不影响他们在映射实例中的身份：
  for (let key of map.keys()) {
    console.log(key); // a b
  }
  for (let value of map.values()) {
    console.log(value); // 123 456
  }
  const keyObj = {
    id: 1,
  };
  let m1 = new Map([[keyObj, "val1"]]);
  for (let key of m1.keys()) {
    key.id = 5;
    console.log(key); // { id:5}
    console.log(m1.get(keyObj)); // val1
  }
  console.log(keyObj); // { id:5}
}
{
  // 没有size ，不能使用clear, 不能便历
  //    WeakMap是Map的“兄弟”类型，其API也是Map的子集， WeakMap中的weak(弱)，描述的是javascript垃圾回收程序对待“弱映射”中键的方式
  let weakmap = new WeakMap();
  let o = {}; // 弱映射中的键只能是Object或者继承自Object类型
  weakmap.set(o, 4);
  console.log(weakmap.get(o)); //4
  // 弱键 “weak”表示弱映射的键是“弱弱地拿着”的。意思就是，这些键不属于正式的引用，不会阻止垃圾回收。
  // 但要注意的是，弱映射中值的引用可不是“弱弱地拿着”的。只要键存在，键/值对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收。
  const wm = new WeakMap();
  wm.set({}, "val");
  setTimeout(() => console.log("wm", wm), 5000); // 引用消失

  const container = {
    key: {},
  };
  const wm1 = new WeakMap();
  wm1.set(container.key, "val");
  function removeReference() {
    container.key = null;
  }
  // 调用removeReference(),就会被垃圾回收
}

{
  //数据结构横向对比 增删改查

  let map = new Map();
  let arr = [];
  //增
  map.set("t", 1);
  arr.push({ t: 1 });
  console.info(map, arr);
  //查
  let map_exist = map.has("t");
  let arr_exist = arr.find((item) => item.t);
  console.info("map-arr", map_exist, arr_exist); // true {t: 1}

  //改
  map.set("t", 2);
  arr.forEach((item) => (item.t ? (item.t = 2) : ""));
  console.info("map-array-modify", map, arr); //map-array-modify Map(1) {"t" => 2} [{…}]

  //删除
  map.delete("t");
  let index = arr.findIndex((item) => item.t);
  arr.splice(index, 1);
  console.info("map-arr-empty", map, arr); //map-arr-empty Map(0) {} []
}

{
  //Set 和 array 的对比
  let set = new Set();
  let arr = [];
  //增
  let obj = { t: 1 };
  set.add(obj);
  arr.push(obj);
  console.log("set-arr-add", set, arr);

  //查
  let set_exist = set.has(obj); //方法一样
  let arr_exist = arr.find((item) => item.t);
  console.info("set-arr-find", set_exist, arr_exist); //set-arr-find true {t: 1}

  //改

  set.forEach((item: Record<string, any>) => (item.t ? (item.t = 2) : ""));
  arr.forEach((item) => (item.t ? (item.t = 2) : ""));
  console.log("set-arr-modify", set, arr); //set-arr-modify Set(1) {{…}}size: (...)__proto__: Set[[Entries]]: Array(1)0: Objectlength: 1 [{…}]0: {t: 2}length: 1__proto__: Array(0)

  //删除
  set.forEach((item: Record<string, any>) => (item.t ? set.delete(item) : ""));
  let index = arr.findIndex((item) => item.t);
  arr.splice(index, 1);
  console.info("set-arr-empty", arr, set); //set-arr-empty [] Set(0) {}
}

{
  // set map object 对比
  let item = { t: 1 };
  let map = new Map();
  let set = new Set();
  let obj = {};
  //增
  map.set("t", 1);
  set.add(item);
  obj["t"] = 1;
  console.info("map-set-obj", map, set, obj);

  //查
  console.info({
    map_exist: map.has("t"), //true
    set_exist: set.has(item), //true
    obj_exist: "t" in obj, // true
  });
  //改
  map.set("t", 2);
  item.t = 2;
  obj["t"] = 2;
  console.info("map-set-obj-modify", obj, map, set);

  //删除
  map.delete("t");
  set.delete(item);
  delete obj["t"];
  console.info("map-set-obj-empty", map, set, obj); //map-set-obj-empty Map(0) {} Set(0) {} {}
}

//优先使用map 不用数组 ，如果考虑数据的唯一性 考虑使用set 放弃数组和obj

// ------------
// ES6增加了Set，他是数学里面“集合”的概念，那么问题来了，数学里面的“集合”
{
  // new Set([iterable]);
  // 1.构造方式
  let set = new Set([1, 2, 3, 4]);
  //2.基本方法 add()/delete()/has()/clear()
  set.add(5);
  console.log(set);
  //    Set(5) {1, 2, 3, 4, 5}
  set.add(4);
  console.log(set);
  //    Set(5) {1, 2, 3, 4, 5}
  set.delete(5);
  console.log(set);
  //    Set(5) {1, 2, 3, 4}
  //   3.工具方法keys()/values()entries()/forEach()
  // Iterator
  // 4.数学上的集合需要支持交并补运算
  // 交集、并集、补集
  let set2 = new Set([1, 2, 3]);
  let set3 = new Set([3, 4, 5]);
  let union = new Set([...set2, ...set3]); //union 是并集
  console.log(union);
  // Set(5) {1, 2, 3, 4, 5}
  // 交集
  let interSet = new Set([...set2].filter((item) => set3.has(item)));
  console.log(interSet);
  // Set(1) {3}
  // 补集
  // 属于set2,同时不属于set3，set2-(减)set3
  let difference = new Set([...set2].filter((item) => !set3.has(item)));
  console.log(difference);
  // Set(2) {1, 2}
}

{
  // weakSet核心特性：
  // 1.WeakSet 里面只能存对象，不能存其它东西
  // 2.WeakSet 里面的对象是弱引用，只要对象的引用为0，随时可能被垃圾收集器收回
  // 3.所以WeakSet是不可枚举的，他只有add()/delete()/has()3个方法 ，
  // 因为里面的对象，有可能在枚举的过程中被收集掉了，这个时候会有诡异的现象发生，这是设计意图。
  // 4.WeakSet 典型的应用场景是用来缓存DOM节点的引用
  // 因为我们用WeakSet来缓存这些DOM节点，
  // 将来在这些DOM节点不被使用的时候，不用担心说是不是有些地方还在持有引用，从而导致内存泄漏的情况。

  // 1.WeakSet 里面只能存对象，不能存其它东西
  // const ws1 = new WeakSet(1);
  // console.log(1)
  // TypeError: number 1 is not iterable (cannot read property Symbol(Symbol.iterator))
  // 2.WeakSet 里面的对象是弱引用，只要对象的引用为0，随时可能被垃圾收集器收回

  const ws2 = new WeakSet();
  let arr = [];
  ws2.add(window);
  ws2.add(arr);
  let now,
    start = new Date().getTime();
  // setInterval(() => {
  // console.log(ws2);
  // now = new Date().getTime();

  // if (now - start >= 5000) {
  //   arr = null;
  // }
  // console.log(ws2.has(arr));
  // WeakSet {Window, Array(0)} true
  //  WeakSet {Window, Array(0)} true
  //  WeakSet {Window, Array(0)} true
  //  WeakSet {Window, Array(0)} true
  //  WeakSet {Window, Array(0)} true
  //  WeakSet {Window}  false .....
  // 可以观察到arr置为null后被垃圾回收了
  // }, 1000);
}

const deepClone = (obj, hash = new WeakMap()) => {
  // 判断obj是undefined 还是null
  if (obj == null) return obj;

  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (typeof obj !== "object") return obj; // 不是对象就不用拷贝了
  // 要不是数组 要不是对象
  if (hash.has(obj)) return hash.get(obj); //如果weakMap中有对象就直接返回

  let cloneObj = new obj.constructor();
  // 如果是对象把他放到weakMap中，如果在拷贝这个对象这个对象就存在了 直接返回这个对象即可
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
};

let arr = [3, 5, 6, 5];
let obj = { age: { name: "yycf" } };
obj["xxx"] = obj;
let newobj = deepClone(obj);
console.log(newobj == obj, "newobj == obj");
console.log(newobj, "newobj");

export {};
