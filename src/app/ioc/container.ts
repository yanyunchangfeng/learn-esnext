import { getInjectionToken } from "./inject";
import {
  Token,
  Provider,
  ValueProvider,
  isClassProvider,
  isValueProvider,
  isFactoryProvider,
  InjectionToken,
  FactoryProvider,
  ClassProvider,
} from "./provider";
import { Type } from "./type";
const DESIGN_PARAMTYPES = "design:paramtypes";
export class Container {
  public providers = new Map<Token<any>, Provider<any>>();
  // 注册提供者
  addProvider<T>(provider: Provider<T>) {
    //provide 就是token或者说标识符
    this.providers.set(provider.provide, provider);
  }
  // 获取对应的服务
  // inject 方法所实现的功能就是根据Token获取与之对应的对象
  inject(type: Token<any>) {
    let provider = this.providers.get(type);
    return this.injectWithProvider(type, provider);
  }
  injectWithProvider<T>(type: Token<T>, provider: Provider<T>): T {
    if (provider === undefined) {
      throw new Error(`No provider for type ${this.getTokenName(type)}`);
    }
    if (isClassProvider(provider)) {
      return this.injectClass(provider);
    } else if (isValueProvider(provider)) {
      return this.injectValue(provider);
    } else if (isFactoryProvider(provider)) {
      return this.injectFactory(provider);
    } else {
      throw new Error(`provider ${type} is not supported`);
    }
  }
  injectClass<T>(provider: ClassProvider<T>): T {
    const target = provider.useClass;
    let params = this.getInjectedParams(target);
    return Reflect.construct(target, params);
    // return new provider.useClass();
  }
  //从类上获取注入的参数
  getInjectedParams<T>(target: Type<T>) {
    let argTypes = <Array<Type<any>> | undefined>(
      Reflect.getMetadata(DESIGN_PARAMTYPES, target)
    );
    if (argTypes === undefined) {
      return [];
    }
    // 把数组做一个转换，从type数组转成此type对应的提供者的实例
    return argTypes.map((argType, index) => {
      const overwriteToken = getInjectionToken(target, index);
      const actualToken =
        overwriteToken === undefined ? argType : overwriteToken;
      let provider = this.providers.get(actualToken);
      return this.injectWithProvider(actualToken, provider);
    });
  }
  injectValue<T>(provider: ValueProvider<T>): T {
    return provider.useValue;
  }
  injectFactory<T>(provider: FactoryProvider<T>): T {
    return provider.useFactory();
  }
  getTokenName<T>(type: Token<T>) {
    //type 是一个类
    return type instanceof InjectionToken
      ? type.injectionIdentifier
      : type.name;
  }
}
