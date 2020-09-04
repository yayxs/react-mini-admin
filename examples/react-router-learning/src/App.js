import React, { memo } from "react";
import { HashRouter} from 'react-router-dom'
// import Nesting from './router/Nesting'
// import CustomLink from './router/CustomLink'
// import PreventingTransitions from './router/preventingTransitions'
// import RecursivePaths from './router/recursivePaths'
// import Hooks from './router/hooks/useRouteMatchHook'
import RouteComp from './router/routeComp'


export default memo(function App() {
  return <HashRouter>
    <RouteComp />
  </HashRouter>
});
