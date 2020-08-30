/*
 * @Author: yayxs
 * @Date: 2020-08-23 11:56:03
 * @LastEditTime: 2020-08-30 21:30:15
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \react-cra-admin\src\router\index.js
 * @
 */
import Login from "../pages/user/login";
import NoFoundPage from "../pages/404";
import Dashboard from "../components/dashboard";
import ListComp from "../components/ui/list";
export const mainRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: NoFoundPage,
  },
];
export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: Dashboard,
  },
  {
    path: "/admin/lists",
    component: ListComp,
  },
];
