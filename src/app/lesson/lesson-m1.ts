import { BehaviorSubject } from "rxjs";

export class DragDropService {
    _dragData = new BehaviorSubject(0);
    setDragData(data){
      this._dragData.next(data);
    }
    getDragData(){
      return this._dragData.asObservable();
    }
    clearDragData(){
      this._dragData.next(null);
    }
  }
  Object.assign(DragDropService.prototype,{
    selector:'yycf-dialog',
    template:'./yycf-dialog.html',
    styleURLs:['./yycf-dialog.css']
    
  })
  var a  = new DragDropService()
  export function md(){
    a = null;
  }
  console.dir(DragDropService,DragDropService.prototype)
  console.dir(DragDropService.prototype)
  console.dir(Reflect.ownKeys(DragDropService))
  console.dir(Reflect.ownKeys(DragDropService.prototype))
  console.log(Object.getOwnPropertyDescriptors(DragDropService))
  console.log(Object.getOwnPropertyDescriptors(DragDropService))
  console.log(Object.getOwnPropertyDescriptors(DragDropService.prototype))
  Object.defineProperty(DragDropService,'length',{
    enumerable:true
  })
  for(var key in DragDropService){
    console.log(key,'ddd',DragDropService[key])
  }
 export default a;