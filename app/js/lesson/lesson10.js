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
    console.log(weakmap.get(o));4
    

}