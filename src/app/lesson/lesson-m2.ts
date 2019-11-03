import dd,{md} from './lesson-m1';
md()
// 在模块2中调用md() 修改变量a 的值，但是导出模块的值不会被改变
console.log(dd,'m2')
// DragDropService {_dragData: BehaviorSubject} "m2"

export{dd as d2}