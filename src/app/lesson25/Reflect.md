#  1. Reflect
1.1 Reflect
 * Reflect对象与Proxy对象一样，也是ES6为了操作对象而提供的新的API
 * JS的装饰器更多的是存在于对函数或者属性进行一些操作, 比如修改他们的值，代理变量，自动绑定this等等功能
 * 但是却无法实现通过反射来获取究竟有哪些装饰器添加到这个类/方法上，于是Reflect Metadata 应运而生

 1.2 Reflect Metadata
  * Reflect Metadata 简单来说,你可以通过装饰器来给类添加一些自定义的信息
  * 然后通过反射将这些信息提取出来
  1.2.1 defineMetadata
  