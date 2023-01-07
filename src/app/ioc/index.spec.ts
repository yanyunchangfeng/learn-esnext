import "reflect-metadata";
import { Container } from "./";
import { Injector } from "./inject";
import { Injectable } from "./injectable";
import { InjectionToken } from "./provider";

let container = new Container();
@Injectable()
class Car {} // ValueProvider
@Injectable()
class House {} // FactoryProvider
@Injectable()
class Friend {
  constructor(public name: string) {}
}
let houseToken = new InjectionToken("house");
let beijingFriendToken = new InjectionToken("beijingFriendToken");
let hangzhouFriendToken = new InjectionToken("hangzhouFriendToken");
let boyFriendToken = new InjectionToken("boyFriendToken");
@Injectable()
class GirlFriend {
  constructor(
    private car: Car,
    @Injector(houseToken) private house: House,
    @Injector(beijingFriendToken) private beijingFriend: Friend,
    @Injector(hangzhouFriendToken) private hangzhouFriend: Friend,
    @Injector(boyFriendToken) private boyFriend: Friend
  ) {}
}
container.addProvider({ provide: Car, useValue: new Car() });
// container.addProvider({ provide: House, useClass: House }); // Error: No provider for type house
container.addProvider({ provide: houseToken, useClass: House });
container.addProvider({
  provide: beijingFriendToken,
  useValue: new Friend("董章俊"),
});
container.addProvider({
  provide: hangzhouFriendToken,
  useValue: new Friend("刘志刚"),
});
container.addProvider({
  provide: boyFriendToken,
  useValue: new Friend("王婷"),
});
container.addProvider({ provide: GirlFriend, useClass: GirlFriend });
// console.log(container.providers);
//inject注入，就是根据token创建对应的值/实例
let girlFriend = container.inject(GirlFriend);
console.log(girlFriend);
