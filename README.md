<p align="center">
    <img width="300" src="src/assets/img/yanyunchangfeng.png">
</p>

## 介绍

你好，我是徐晓东，笔名[燕云长风](https://www.yanyunchangfeng.com)。大漠穷秋于 2019-03-16 21:22 赠此笔名。  
寓意：结合李白著名的边塞诗《关山月》取【燕云长风】—— 长风几万里，吹度玉门关。

## 这是 es6 、es7 新增特性如下:

1.  [let 和 const](src/app/lesson/lesson1.js)
2.  [解构赋值](src/app/lesson/lesson2.js)
3.  [正则的扩展](src/app/lesson/lesson3.js)
4.  [字符串的扩展](src/app/lesson/lesson4.js)
5.  [Number 和 Math](src/app/lesson/lesson5.js)
6.  [数组的扩展](src/app/lesson/lesson6.js)
7.  [函数的扩展](src/app/lesson/lesson7.js)
8.  [对象的扩展](src/app/lesson/lesson8.js)
9.  [Symbol 类型](src/app/lesson/lesson9.js)
10. [Set Map WeakSet WeakMap](src/app/lesson/lesson10.js)
11. [Proxy Reflect ](src/app/lesson/lesson11.js)
12. [Class](src/app/lesson/lesson12.ts)
13. [Promise](src/app/lesson/lesson13.js)
14. [Iterator 和 for ... of](src/app/lesson/lesson14.js)
15. [genertaor](src/app/lesson/lesson15.js)
16. [decorator](src/app/lesson/lesson16.ts)
17. [module](src/app/lesson/lesson17.js)
18. [async await](src/app/lesson/lesson18.ts)
19. [BigInt](src/app/lesson/lesson19.ts)
20. [requestAnimationFrame](src/app/lesson/lesson21.ts)
21. [requestIdleCallback](src/app/lesson/lesson22.ts)
22. [fiber UpdateQueue](src/app/lesson/lesson23.ts)
23. [fiber linkList ](src/app/lesson/lesson24.ts)

## Jest Unit 测试

### 安装

```
   npm install --save-dev jest typescript ts-jest @types/jest  or yarn add --dev jest typescript ts-jest @types/jest
```

### 创建测试 ts 类型的配置文件 jest config file

```
   npx ts-jest config:init or  yarn ts-jest config:init
```

### 具体配置参数文档 请参照官网：

- https://jestjs.io/docs/en/configuration.html

### 运行 unit 测试

```
npm t  or yarn test
```

## cypress e2e 测试

### 安装

```
  npm install cypress --save-dev or  yarn add cypress --dev
```

### 打开 cypress 测试

```
   npx cypress open  or  yarn run cypress open
```

### 添加 npm script in package.json

```
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}

```

### typescript 文件测试,需在 cypress 目录文件夹下创建 tsconfig.json

```
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": "../node_modules",
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress"]
  },
  "include": [
    "**/*.ts"
  ]
}
```

### 创建测试文件需要在 cypress/integration 文件夹下创建

```
   touch {your_project}/cypress/integration/sample_spec.(j|t)s
```

### 运行 e2e 测试,选择指定文件进行测试

```
    npm run cypress:open
```

## 我的个人博客

- [燕云长风](https://www.yanyunchangfeng.com)

## 我参与的系列项目

1. [NiceFish](https://gitee.com/mumu-osc/NiceFish)：美人鱼，这是一个微型 Blog 系统，前端基于 Angular7.0 + PrimeNG7.1.0。（GVIP 码云最有价值的开源项目 3160 ☆)
2. [NiceFish-React](https://gitee.com/mumu-osc/NiceFish-React)：这是 React 版的实现，和 NiceFish Angular 版本保持风格一致。采用 React Hooks 16.8.3 版本，使用 TypeScript、Ant Design 组件库以及 Bootstrap v4.2.1 开发。 (7 ☆)
3. [OpenWMS-Frontend](https://gitee.com/mumu-osc/OpenWMS-Frontend)：OpenWMS 项目前端基于 Angular 7.0 + PrimeNG 7.1.0。 (已推荐 199 ☆)
4. [nicefish-spring-cloud](https://gitee.com/mumu-osc/nicefish-spring-cloud)：这是 NiceFish 的服务端代码，基于 SpringCloud。已经完成了一些基本的功能，如 SpringSecurity+OAuth2+JWT 实现 SSO，文章、用户、评论等的分页查询等。如果你需要与这个后端代码进行对接，请检出本项目的 for-spring-cloud 分支。 (已推荐 113 ☆)

## 我的社交主页

1. [燕云长风知乎](https://zhihu.com/people/hbxyxuxiaodong)
2. [燕云长风知乎专栏](https://zhuanlan.zhihu.com/yanyunchangfeng)
3. [燕云长风 github](https://github.com/yanyunchangfeng)
4. [燕云长风 gitee](https://gitee.com/yanyunchangfeng)
5. [燕云长风 twitter](https://twitter.com/yanyunchangfeng)
6. [燕云长风 medium](https://medium.com/@yanyunchangfeng)

## 开源许可证

MIT
