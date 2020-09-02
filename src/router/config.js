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
import Dashboard from "../pages/dashboard/analysis";
import BasicTable from "../pages/list/basic-list/index";
import BraftEditorPage from '../pages/richText/braftEditor'
export default {
  menus: [
    {
      path: "/admin/dashboard",
      title: "看板",
      icon: "mobile",
      component: Dashboard,
    },
    {
      path: "/admin/table",
      title: "表格",
      subs: [
        {
          path: "/admin/table/basicTable",
          title: "基础表格",
          component: BasicTable,
        },
      ],
    },
    {
      path: "/admin/richtext",
      title: "富文本",
      subs: [
        {
          path: "/admin/richtext/braftEditor",
          title: "braftEditor编辑器",
          component: BraftEditorPage,
        },
      ],
    },
  ],
  other: [
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/404",
      component: NoFoundPage,
    },
  ],
};
