// react fiber之前的协调  深度优先遍历
//  1. React 会递归比对virtualDOM树，找出需要变动的节点，然后同步更新它们 ，这个过程React称为Reconciliation(协调)
//  2. 在Reconciliation 期间，React 会一直占用着浏览器资源，一则会导致用户触发的事件得不到响应，二则会导致掉帧，用户可能会感觉到卡顿

const sleepDelay = (delay: number) => {
  let start = Date.now();
  do {
    var now = Date.now();
  } while (now - start <= delay);
};
let root = {
  key: "A1",
  children: [
    {
      key: "B1",
      children: [
        {
          key: "C1",
          children: [],
        },
        {
          key: "C2",
          children: [],
        },
      ],
    },
    {
      key: "B2",
      children: [],
    },
  ],
};
const doWork = (vdom: Record<string, any>) => {
  console.log(vdom.key);
};
const walk = (vdom: Record<string, any>) => {
  doWork(vdom);
  vdom.children.forEach((child: any) => {
    walk(child);
  });
};
walk(root);

interface FiberType {
  type?: string;
  key?: string;
  return?: any;
  sibling?: any;
  child?: any;
}

let A1: FiberType = { type: "div", key: "A1" };
let B1: FiberType = { type: "div", key: "B1", return: A1 };
let B2: FiberType = { type: "div", key: "B2", return: A1 };
let C1: FiberType = { type: "div", key: "C1", return: B1 };
let C2: FiberType = { type: "div", key: "C2", return: B1 };

A1.child = B1;
B1.sibling = B2;
B1.child = C1;
C1.sibling = C2;

/**
 *  1. 从顶开始遍历
 *  2. 如果有大儿子，先遍历大儿子
 *  3. 遍历规则：
 *    1. 下一个节点：先儿子，后弟弟，再叔叔
 *    2. 自己所有子节点完成后自己完成
 */
type nextWork = FiberType | null;
let nextUnitOfWork: nextWork = null; // 下一个执行单元

const beginWork = (fiber: FiberType) => {
  // A1 B1 C1 C2 B2
  sleepDelay(20);
  console.log("开始", fiber.key);
};
const completeUnitOfWork = (fiber: FiberType) => {
  // C1 C2 B1 B2 A1
  console.log("结束", fiber.key);
};
const performUnitOfWorks = (fiber: FiberType) => {
  // A1 B1 C1 C2
  beginWork(fiber); // 处理此fiber
  if (fiber.child) {
    // 如果有儿子，返回大儿子
    return fiber.child;
  }
  // 如果没有儿子，说明此fiber已经完成了
  while (fiber) {
    completeUnitOfWork(fiber);
    if (fiber.sibling) {
      return fiber.sibling; // 如果说有弟弟返回弟弟
    }
    fiber = fiber.return;
  }
};
const workLoops = (deadline: IdleDeadline) => {
  // while (nextUnitOfWork) { //如果有待执行的执行单元，就执行，然后会返回下一个执行单元
  console.log(`本帧的剩余时间为${parseInt(deadline.timeRemaining() as any)}`);
  while (
    (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
    nextUnitOfWork
  ) {
    nextUnitOfWork = performUnitOfWorks(nextUnitOfWork);
  }
  if (!nextUnitOfWork) {
    console.log("render阶段结束了");
  } else {
    requestIdleCallback(workLoops, { timeout: 1000 });
  }
};
nextUnitOfWork = A1;

requestIdleCallback(workLoops, { timeout: 1000 });
