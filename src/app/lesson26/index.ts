/**
 * Ioc DI是如何诞生的 ，以及他们解决了什么问题
 */

/**
 * IOC inverse of control
 * IOC 意味着你把你的对象交给容器，然后交给容器控制，而不再自己控制
 */
interface Monitor {}
class Monitor27inch implements Monitor {}
interface Host {}
class LegendHost implements Host {}

class Computer {
  monitor: Monitor;
  host: Host;
  constructor(monitor: Monitor, host: Host) {
    // this.monitor = new Monitor27inch();
    // this.host = new LegendHost()
    this.monitor = monitor;
    this.host = host;
  }
  startup() {
    console.log("组装好了，可以开机了");
  }
}

let monitor = new Monitor27inch();
let host = new LegendHost();
let computer = new Computer(monitor, host);
computer.startup();
/**
 * 存在问题
 * 1. 无法创建不同的组件
 * 2. 需要在类的内部手工创建零件或者说组件
 */
