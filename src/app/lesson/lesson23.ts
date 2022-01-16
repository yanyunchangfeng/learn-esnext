/**
 * 在fiber中 很多地方都用到链表
 */


class Update{ //payload数据或者 说元素
    payload;
    nextUpdate;
    constructor(payload, nextUpdate?) {
        this.payload = payload
        this.nextUpdate = nextUpdate
    }
}

class UpdateQueue{
    baseState;
    firstUpdate;
    lastUpdate;
    constructor() {
        this.baseState = null;
        this.firstUpdate = null;
        this.lastUpdate = null;
    }
    enqueueUpdate(update) {
        if (this.firstUpdate === null) {
            this.firstUpdate = this.lastUpdate = update;
        } else {
            this.lastUpdate.nextUpdate = update;// 上一个最后一个节点的nextUpdate指向自己
            this.lastUpdate = update // 让最后一个节点指向自己
        }
    }
    //获取老状态。然后遍历这个链表，进行更新
    forceUpdate() {
        let currentState = this.baseState || {} //初始状态
        let currentUpdate = this.firstUpdate;
        while (currentUpdate) {
            let nextState = typeof currentUpdate.payload == 'function' ? currentUpdate.payload(currentState) : currentUpdate.payload
            currentState = { ...currentState, ...nextState };//使用当前更新得到新的状态
            currentUpdate = currentUpdate.nextUpdate;// 找下一个节点
        }
        this.firstUpdate = this.lastUpdate = null; //更新完成之后要把链表清空
        this.baseState = currentState
        return currentState
    }
}

let queue = new UpdateQueue()
queue.enqueueUpdate(new Update({name:'yanyunchangfeng'}))
queue.enqueueUpdate(new Update({number:2022}))
queue.enqueueUpdate(new Update((state)=>({ number:state.number+1})))
queue.enqueueUpdate(new Update((state) => ({ number: state.number + 1 })))
queue.forceUpdate()
console.log(queue.baseState)