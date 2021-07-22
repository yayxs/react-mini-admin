import Login from '../../pages/Login';
import Article from '../../pages/Article';
import TestPage from '../../pages/TestPage';
import Unauthorized from '../pages/Unauthorized/404';
const authorizedRoutes = [
  {
    path: '/dashboard/analysis/realtime',
    exact: true,
    permissions: ['admin', 'user'],
    redirect: '/login',
    component: TestPage,
    pageTitle: '',
  },
  {
    path: '/dashboard/analysis/offline',
    exact: true,
    permissions: ['admin', 'user'],
    redirect: '/login',
    component: TestPage,
    pageTitle: '',
  },
  {
    path: '/dashboard/workplace',
    exact: true,
    permissions: ['admin'],
    redirect: '/login',
    component: TestPage,
    pageTitle: '',
  },
  {
    path: '/outlets',
    exact: true,
    permissions: ['admin', 'user'],
    component: Article,
    unauthorized: Unauthorized,
    pageTitle: 'pageTitle_outlets',
    breadcrumb: ['/outlets'],
  },
  {
    path: '/outlets/:id',
    exact: true,
    permissions: ['admin', 'user'],
    component: TestPage,
    unauthorized: Unauthorized,
    pageTitle: 'pageTitle_outletDetail',
    breadcrumb: ['/outlets', '/outlets/:id'],
  },
  {
    path: '/exception/403',
    exact: true,
    permissions: ['god'],
    component: TestPage,
    unauthorized: Unauthorized,
  },
];

const normalRoutes = [
  {
    path: '/',
    exact: true,
  },
  {
    path: '/login',
    component: Login,
  },
];

const combineRoutes = [...authorizedRoutes, ...normalRoutes];

export { authorizedRoutes, normalRoutes, combineRoutes };
