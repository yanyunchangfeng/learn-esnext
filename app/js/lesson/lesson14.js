//Iterator 和 for ... of 循环

{
    let arr  = ['hello','yycf'];
    console.log(arr)
    let map  = arr[Symbol.iterator]();
    console.log(map.next()) //{value: "hello", done: false}
    console.log(map.next())  // {value: "yycf", done: false}
    console.log(map.next())  // {value: undefined, done: true}
}
{
    let obj = {
        start:[1,2,3],
        end:[6,7,8],
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr =self.start.concat(self.end);
            let len =arr.length;
            return {
                next(){
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return {
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    for (let key of obj){
        console.log(key)
    }
}
{
    let arr  = ['hello','yycf'];
    for(let val of arr){
        console.log(val)
    }
}