## 前言

### 背景

为了更好的服务于开源的`网易云项目` ，特此在 `admin 实践中` 分析路由相关的 `API` 完整的代码 请移步 `examples/react-router-learning`

### 未来

```js
// 相对连接的方式
<Link to="?something=different"/>

// 相对链接层级更深
<Link to="account/reset-password" />

// 基于导航的副作用
function usePageViews() {
  const { location } = useLocation()
  useEffect(() => {
    ga('send', 'pageview', location.pathname)
  }, [location])
}

// 使用 hooks 访问参数
function SomeComponent() {
  const { userId } = useParams()
  // ...
}

// 路径匹配
<Route
  path="event/:date"
  validate={params => isValidDate(params.date)}
>
  <Event/>
</Route>
```

## example

### 基本

页面不刷新，但是路由总是最新，`Switch` 遍历所有的子元素，只用匹配的一条渲染。其中使用的 `Link` 标签总是被实际渲染为`a` 标签

```html
<a href="/about"></a>
```

> 完整的代码案例

```jsx
<Router>
  <div>
    <Link to="/">首页</Link>
    <Link to="/about">关于</Link>
    <Link to="/dashboard">看板</Link>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <DashBoard />
      </Route>
    </Switch>
  </div>
</Router>
```

还有一种常见的方式就是我们所谓的动态参数，业务场景就是根据列表的 id 跳转到编辑页获取详情展示，真实的路由配置类似

```js

 {
    path: "/admin/products",
    component: List,
    isShow: true,
    exact: true,
    title: "商品管理",
    icon: "shop"
  },
  {
    path: "/admin/products/edit/:id?",
    component: Edit,
    isShow: false
  },
```

官方给我的示例如下，通过`useParams` 来获取 url 中的动态参数

```js
const ChildPage = () => {
  const { id } = useParams();
  return (
    <>
      我是子组件
      <h3>{id}</h3>
    </>
  );
};
```

```js
<Router>
  <div className="App">
    <ul>
      <li>
        <Link to="/home"> 去首页</Link>
      </li>
      <li>
        <Link to="/about">去关于页</Link>
      </li>
    </ul>
  </div>
  {/* 路由渲染的位置 */}
  <Switch>
    <Route path="/:id" children={<ChildPage />} />
  </Switch>
</Router>
```

## 嵌套路由

**值得一提的是路由不过是一个简单的组件，和普通的组件相差无异**,也就是说存在嵌套路由的情况，

```jsx
const Topic = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>/topic/rendering</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>/topic/components</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>{path}</h3>
        </Route>
        <Route path={`${path}/:id`}>
          <ItemComp />
        </Route>
      </Switch>
    </>
  );
};
```
## 声明式导航 `Link`