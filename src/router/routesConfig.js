/*
 * @Author: yayxs
 * @Date: 2020-08-23 11:56:21
 * @LastEditTime: 2020-08-23 13:36:59
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \react-cra-admin\src\router\routesConfig.js
 * @
 */
const menus = [
  {
    path: "/admin/dashboard/index",
    title: "首页",
    icon: "mobile",
    component: "Dashboard",
  },
  {
    path: "/admin/ui",
    title: "视图",
    icon: "scan",
    children: [
      {
        path: "/admin/ui/richText",
        title: "富文本",
        component: "RichText",
      },
    ],
  },
];

const other = [];

export default {
  menus,
  other,
};
