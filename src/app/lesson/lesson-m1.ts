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
  var a  = new DragDropService()
  export function md(){
    a = null;
  }
 export default a;