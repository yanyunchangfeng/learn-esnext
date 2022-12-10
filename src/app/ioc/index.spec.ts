import { Container } from "./";
let container = new Container();
// const point = { x: 10, y: 10 };
class BasicClass {}
class Car {} //ValueProvider
class House {} // FactoryProvider
class GirlFriend {
  constructor(private car: Car, private house: House) {}
}
container.addProvider({ provide: Car, useValue: new Car() });
// container.addProvider({ provide: BasicClass, useFactory: () => new House() });
// container.addProvider({ provide: GirlFriend, useClass: GirlFriend });
// console.log(container.providers);
//inject注入，就是根据token创建对应的值
let car = container.inject(Car);
console.log(car);
