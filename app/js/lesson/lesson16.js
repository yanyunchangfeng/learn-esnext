//修饰器是一个函数，用来修改类的行为
{

    let readonly = function (target,name,descriptor){
         descriptor.writable = false;
         return descriptor
    }
    class Test{
        @readonly
        time(){
            return '2019-05-03'
        }
    }
    let test  = new Test();
    test.time = function(){
        console.log('reset time')
    }   
    console.log(test.time()) //2019-05-03
}

{
    let typename = function (target,name,descriptor){
        target.myname = 'yycf'
    }
    @typename
    class Test{

    }
    console.log('类修饰器',Test.myname) //类修饰器 yycf
    //第三方库修饰器的js库：core-decorators //npm i core-decorators
}

{
    //好处1. 把埋点系统抽离出来，成为一个可复用的模块,将来埋点接口变了，只用改log方法 广告类几乎不动
    //2.埋点系统从业务逻辑中剥离出去，业务代码更简洁便于维护
    let log = type=>{
        return (target,name,descriptor)=>{
            let src_method =descriptor.value;
            descriptor.value = (...arg)=>{
                src_method.apply(target,arg);
                // 模拟埋点  埋点后执行
                //在真实的业务中一般为 new Image().src  然后一个接口
                console.info(`log ${type}`)
            }
        }
    }
    class AD{
        @log('show')
        show(){
            console.log('ad is show')
        }
        @log('click')
        click(){
            console.info('ad is click')
        }
    }
    let ad = new AD();
    ad.show();
    ad.click();
}