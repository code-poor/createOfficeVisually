import React from 'react';
import { useRoutes } from 'react-router-dom';
import Model from './model';
import Home from './pages/home';
import Details from './pages/details';
const routeList = [
  {
    title: '首页',
    path: '/',
    element: <Home />
  },
  {
    title: '详情',
    path: '/details',
    element: <Details />
  }
];
const App = () => {
  // 获取当前所有的路由
  const route = useRoutes(routeList);
  window.yyds = new Model();
  return route;
};
export default App;
