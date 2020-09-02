## Creat React app 从 0 搭建基于 `antd` `mock` `Redux Toolkit` 的 admin 中后台解决方案 (一)

>

## 前言

### 背景

从目前实际的背景来看，关于项目中的 `中后台管理系统` 也就是咱们平常所谓的 `admin` 项目。不得不提的就是`花裤衩偶像` 和`唐金洲偶像`。等等。单从 `react` 技术栈来看的话呢，想必我们第一想到的就是 `antd` 系列 ，包括

- UI 框架 antd
- 数据流 dva
- 实践框架 antd-pro
- 集成方案 UmiJS

最近一段时间研究了下它们的源码，有一种`规范`在。值得深入探讨和学习。不过接下来的文章全部是`JS` 部分。为什么强调这一点呢。从目前的趋势来看，写`React` 差不多已经都走向了 `TypeScrit` **小 tips** : 学习 `antd` 系列最好也是学习 `TS` 版本的。

### 对比`Vue`

我们重点讨论的是 `React` ，不得不提的是`vue` 关于 `admin` 的解决方案，社区里有很多成熟优雅大方的，包括上文提到的

- `[PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)`
- `[vueComponent/ant-design-vue](https://github.com/vueComponent/ant-design-vue)`

但是从`create raect app` 的角度出发，并且弹出`webpack` 的配置（注意官方是不建议直接弹出的）修改`webpack` 的配置也是有其他的方案，请自行搜索。采用的更多的方案是更成熟的一套 `umijs` 
