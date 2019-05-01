import { type } from "os";


//Proxy Reflect  供应商 代理商 用户 中间连接了用户 和最真实的对象中间的一个层 Reflect 反射的是Object

{
    let obj ={
        time:'2019-05-01',
        name:'yycf',
        _r:123
    };
    let monitor = new Proxy(obj,{
      //拦截对象属性的读取
      get(target,key){
         return target[key].replace('2019','2020')
      },
      //拦截对象设置属性
      set(target,key,value){
         if(key === 'name'){
             target[key] = value
         }else{
             return target
         }
      },
      // 拦截key in obj
      has(target,key){
         if(key === 'name'){
             return target[key]
         }else{
             return false
         }
      },
      //拦截delete
      deleteProperty(target,key){
          if(key.includes('_')){
              delete target[key]
              return true
          }else{
              return target[key]
          }
      },
      //拦截Object.keys Object.getOwnPropertySymbols Object.getOwnPropertyNames;
      ownKeys(target){
         return Object.keys(target).filter(item=> item !== 'time')
      }
    })
    //有一个类似原始供应商的原始对象obj，通过proxy先生成一个对象，这个对象是映射obj，然后在中间做一些操作
    // 最后用户访问的是monitor，不管用户是通过读取monitor对象，还是设置monitor对象，最终通过proxy再传递给这个obj对象
    console.log('get',monitor.time); //get 2020-05-01
    monitor.time = 2019;
    console.log('set',monitor.time); // set 2020-05-01
    console.log('has','name' in monitor); // has true
    console.log('has','time' in monitor); // has false
    delete monitor.time;
    console.log(obj);// {time: "2019-05-01", name: "yycf", _r: 123}
    delete monitor._r;
    console.log(obj)//{time: "2019-05-01", name: "yycf"}
    console.log('ownkeys',Object.keys(monitor))//ownkeys ["name"]
}

{
    //Reflect Proxy 的方法 Reflect都有，而且一样
    let obj ={
        time:'2019-05-01',
        name:'yycf',
        _r:123
    };
    console.log('Reflect-get',Reflect.get(obj,'time'));
    Reflect.set(obj,'time','2012-11-01');
    console.log(obj) //{time: "2012-11-01", name: "yycf", _r: 123};
    console.log('has',Reflect.has(obj,'time')) //has true 
}
{
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                console.log(proxy)
                if(target.hasOwnProperty(key)){
                  let va =this._validator[key];
                  console.log('new')
                  if(!!va(value)){
                      return Reflect.set(target,key,value,proxy)
                  }else{
                      throw Error(`不能设置${key} 到${value}`)
                  }
                }else{
                    throw Error(`${key} 不存在`)
                }
            }
        })
    }
    const personValidators={
        name(val){
          return typeof val === 'string'
        },
        age(val){
          return typeof val === 'number' && val>18
        }
    }
    class Person{
        constructor(name,age){
            
            this.name = name;
            this.age = age;
            return validator(this,personValidators);
           
        }
    }
    const p = new Person('yycf',18);
    // p.age =1; 报错
    console.log(p)
}