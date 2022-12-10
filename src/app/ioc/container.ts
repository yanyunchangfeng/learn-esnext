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
      //   return this.injectClass(provider);
    } else if (isValueProvider(provider)) {
      return this.injectValue(provider);
    } else if (isFactoryProvider(provider)) {
      return this.injectFactory(provider);
    } else {
      throw new Error(`provider ${type} is not supported`);
    }
  }
  injectClass<T>(provider: ClassProvider<T>): T {
    // ToDo
    const target = provider.useClass;
    let params = [];
    return Reflect.construct(target, params);
    // return new provider.useClass();
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
