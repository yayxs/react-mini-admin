import Home from "../pages/home";
import Login from "../pages/login";
import User from "../pages/user";
import Detail from "../pages/detail";
import NotFound from "../pages/404";
const routes = [
  {
    path: "/users",
    exact: true,
    permissions: ["admin", "user"],
    component: User,
    unauthorized: "Unauthorized",
    pageTitle: "用户管理",
    breadcrumb: ["/user"],
  },
  {
    path: "/users/:id",
    exact: true,
    permissions: ["admin"],
    component: Detail,
    redirect: "/",
    pageTitle: "User Detail",
    breadcrumb: ["/users", "/users/:id"],
  },
];

export default routes;
