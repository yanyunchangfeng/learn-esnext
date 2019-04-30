
//数组的扩展
{
  let arr = Array.of(3,4,5,6,7); 
  console.log(arr)// [3,4,5,6,7]
  let empty = Array.of();
  console.log(empty) //[]
}
{
    let divcol = document.querySelectorAll('div');
    console.log(divcol)
    let divarr =  Array.from(divcol);
    console.log(divarr)

    console.log(Array.from([1,3,5],item => item * 2))
}

{
    console.log('fill-666',[1,2,undefined].fill(666)) // [666, 666, 666]
    console.log('fill,pos',[1,2,undefined,4].fill(666,1,3)) //[1, 666, 666, 4]
}

{
    for(let index of ['a','b','c'].keys()){
        console.log(index) // 0,1,2
    }
    for(let index of ['a','b','c'].values()){
        console.log(index) // a,b,c
    }
    for(let [index ,value]of ['a','b','c'].entries()){
        console.log(index,value) // 0 'a' 1 "b" 2 "c"
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4)) // [4,2,3,4,5]
}
{
    //查找
    console.log([1,2,3,4,5,6].find(item=>item>3)) //4
    console.log([1,2,3,4,5,6].findIndex(item=>item>3)) //3
}

{
    console.log([1,2,NaN].includes(1)) //true
    console.log([1,2,NaN].includes(NaN)) //true
}