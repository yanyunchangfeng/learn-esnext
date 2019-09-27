// Set Map WeakSet WeakMap

{
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log(list.size) //2
}
{
    let arr  = [1,2,3,4,5];
    
    let list = new Set(arr);
    arr = [];
    console.log(list.size,list) //5
}
{
    let list  = new Set();
    list.add(1)
    list.add(2)
    list.add(1);
    console.log(list.size) //2
    let arr= [1,2,1,2,4,4,'2']; 
    let list1 = new Set(arr);
    console.log(list1)//Set(3) {1, 2, 4,'2'} 无法过滤数据类型不一样的 注意2 和'2'
    //这个特性可以去重，不过效率没有hash算法高
}
{
    let arr =['add','delete','has','clear'];
    let list  = new Set(arr)
    console.log('has',list.has('add')); //has true
    console.log('delete',list.delete('add'),list); //delete true Set(3) {"delete", "has", "clear"}
    for (let key of list.keys()){
       console.log('key',key) //key delete
                             // key has
                             // key clear
    }
    
    for (let value of list.values()){
       console.log('value',value) //value delete
                             // value has
                             // value clear
    }
    
    for (let value of list){
       console.log('value',value) //value delete
                             // value has
                             // value clear
    }
    for (let [key,value] of list.entries()){
       console.log('key-value',key,value) // key-value delete delete
                                          // key-value has has
                                          // key-value clear clear
    }
    list.forEach(item=>console.log(item)) // delete has clear
    list.clear();
    console.log(list) //Set(0) {}
    
}

{
    // 1.WeakSet的元素必须是obj ,2. WeakSet中的对象是弱引用,ta不会检测这个对象有没有在其它地方用过;不会跟垃圾回收机制挂钩，通俗来讲，就是说在weakset中添加一个对象，不是整个值拷过来，而是地址引用，而且它不会检测这个地址是否被垃圾回收掉了
     //没有size ，不能使用clear
     //不能便历
    let arr = {a:1,b:2};
    let weakList = new WeakSet();
    weakList.add(arr);
    arr = null;
    console.dir(weakList) //WeakSet
    //    WeakSet
    //__proto__: WeakSet
    //[[Entries]]: Array(1)
    //0:
    //value: {a:1,b:2}
    //length: 1
    // weakList.add(1)//报错 基础类型的值无效
}
{
     //map 的key 可以是任意类型
    let map = new Map();
    let arr = ['123'];
    map.set(arr,9);
    console.log(map);
    console.log('map',map,map.get(arr)) //map 9
    map.forEach(item=>console.log('map',item))
  
}
{
    let map = new Map([['a',123],['b',456]]);
    console.log('map args',map);  //map args Map(2) {"a" => 123, "b" => 456}size: (...)__proto__: Map[[Entries]]: Array(2)0: {"a" => 123}1: {"b" => 456}length: 2
    console.log('size',map.size) // size 2
    // console.log('delete',map.delete('a'),map)
    // console.log('clear',map.clear(),map)
    

}
{
     //1.key值必须是对象
     //没有size ，不能使用clear
     //不能便历
    let weakmap = new WeakMap();
    let o = {};
    weakmap.set(o,4);
    console.log(weakmap);
    console.log(weakmap.get(o));//4
    

}

{
    //数据结构横向对比 增删改查

    let map = new Map();
    let arr = [] ;
    //增
    map.set('t',1);
    arr.push({t:1})
    console.info(map,arr)
        // Map(1) {"t" => 1}
        //size: (...)
        //__proto__: Map
        //[[Entries]]: Array(1)
        //0: {"t" => 1}
        //key: "t"
        //value: 1
        //length: 1

    //查
    let map_exist = map.has('t');
    let arr_exist =  arr.find(item=>item.t)
    console.info('map-arr',map_exist,arr_exist) // true {t: 1}

    //改
    map.set('t',2);
    arr.forEach(item=>item.t?item.t=2:'');
    console.info('map-array-modify',map,arr);//map-array-modify Map(1) {"t" => 2} [{…}]

    //删除
    map.delete('t');
    let index = arr.findIndex(item=>item.t);
    arr.splice(index,1);
    console.info('map-arr-empty',map,arr)//map-arr-empty Map(0) {} []

}

{
    //Set 和 array 的对比
    let set = new Set();
    let arr = [];
    //增
    let obj = {t:1};
    set.add(obj);
    arr.push(obj);
    console.log('set-arr-add',set,arr)
      //Set(1) {{…}}
      //size: (...)
      //__proto__: Set
      //[[Entries]]: Array(1)
      //0:
      //value: {t: 1}
      //length: 1

    //查
    let set_exist = set.has(obj); //方法一样 
    let arr_exist = arr.find(item=>item.t);
    console.info('set-arr-find',set_exist,arr_exist) //set-arr-find true {t: 1}

    //改

    set.forEach(item=>item.t?item.t = 2:'')
    arr.forEach(item=>item.t?item.t = 2:'')
    console.log('set-arr-modify',set,arr) //set-arr-modify Set(1) {{…}}size: (...)__proto__: Set[[Entries]]: Array(1)0: Objectlength: 1 [{…}]0: {t: 2}length: 1__proto__: Array(0)

    //删除
    set.forEach(item=>item.t?set.delete(item):'');
    let index = arr.findIndex(item=>item.t);
    arr.splice(index,1);
    console.info('set-arr-empty',arr,set)//set-arr-empty [] Set(0) {}

}

{
    // set map object 对比
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};
    //增
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;
    console.info('map-set-obj',map,set,obj)
    
    //查
    console.info({
        map_exist:map.has('t'), //true
        set_exist:set.has(item),//true
        obj_exist:'t' in obj // true
    })
   //改
   map.set('t',2);
   item.t =2;
   obj['t'] = 2;
   console.info('map-set-obj-modify',obj,map,set)

   //删除
   map.delete('t');
   set.delete(item);
   delete obj['t'];
   console.info('map-set-obj-empty',map,set,obj)//map-set-obj-empty Map(0) {} Set(0) {} {}
}

//优先使用map 不用数组 ，如果考虑数据的唯一性 考虑使用set 放弃数组和obj

                   // ------------
// ES6增加了Set，他是数学里面“集合”的概念，那么问题来了，数学里面的“集合”
{
    // new Set([iterable]);
    // 1.构造方式
   let set = new Set([1,2,3,4]);
   //2.基本方法 add()/delete()/has()/clear()
   set.add(5);
   console.log(set)
//    Set(5) {1, 2, 3, 4, 5}
   set.add(4);
   console.log(set)
   //    Set(5) {1, 2, 3, 4, 5}
   set.delete(5)
   console.log(set)
      //    Set(5) {1, 2, 3, 4}
    //   3.工具方法keys()/values()entries()/forEach()
    // Iterator
    // 4.数学上的集合需要支持交并补运算
    // 交集、并集、补集
    let set2 = new Set([1,2,3]);
    let set3 = new Set([3,4,5]);
    let union = new Set([...set2,...set3])//union 是并集
    console.log(union)
    // Set(5) {1, 2, 3, 4, 5}
    // 交集
    let interSet = new Set([...set2].filter(item => set3.has(item)))
    console.log(interSet)
    // Set(1) {3}
    // 补集
    // 属于set2,同时不属于set3，set2-(减)set3
    let difference = new Set([...set2].filter(item=>!set3.has(item)));
    console.log(difference)
    // Set(2) {1, 2}

}

