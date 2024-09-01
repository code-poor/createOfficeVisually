import React from 'react';
import { useRoutes } from 'react-router-dom';
import Model from './model';
import Home from './pages/home';
const routeList = [
  {
    title: '首页',
    path: '/',
    element: <Home />
  }
];
const App = () => {
  // 获取当前所有的路由
  const route = useRoutes(routeList);
  // 创建一个model
  new Model();
  return route;
};
export default App;
