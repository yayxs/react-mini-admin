<h1 align="center">Welcome to react-cra-admin 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/yayxs/react-cra-admin/tree/master/docs" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> **基于`create react app` 和 `antd` 的后台管理系统解决方案**

## Getting Started

### Quick Start

```bash
yarn start
```

### Available Scripts

```bash
npm start

```

## Tutorials

- [Creat React app 从 0 搭建基于 antd mock Redux Toolkit 的 admin 中后台解决方案 (一)](https://github.com/yayxs/react-cra-admin/tree/master/docs)

## Folder Structure

```sh
├── config
│   ├── webpack.config.js     # webpack 配置
├── docs                      # 文档教程
│   ├── ReactRouterDoc
│   └── README.md
├── examples
│   └── react-router-learning # 路由学习 与本案例无直接关系
├── jsconfig.json
├── LICENSE
├── mockServer.js             # Mock 数据
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html          # 页面模板
├── README.md
├── src
│   ├── components          # 封装共用组件
│   ├── index.js            # 跟入口
│   ├── layouts             # 布局视图
│   ├── pages               # 页面
│   ├── router              # 路由配置
│   ├── setupProxy.js       # proxy 代理
│   ├── styles              # 样式文件
│   └── utils               # 工具人
└── yarn.lock

```

## Author

👤 **yayxs**

- Website: [http://vast.icu Filing](http://vast.icu)
- Github: [@yayxs](https://github.com/yayxs)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/yayxs/react-cra-admin/issues).

## Show your support

Give a ⭐️ if this project helped you!

## Before Eject

```json
{
  "name": "react-cra-admin",
  "version": "0.0.2",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
