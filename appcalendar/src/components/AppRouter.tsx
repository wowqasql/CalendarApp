import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { privateRoutes, publicRoutes, RouterName } from '../router'

const AppRouter = () => {
  
  const isAuth = useTypedSelector(state => state.auth.isAuth)
  console.log(isAuth)
// Если авторизован, то не видит логин, если не авторизован, то не видит календарь
  return (
    isAuth //  Если пользователь не авторизован маршрут будет не доступен
      ? // Если пользователь авторизован, пробегаемся по массиву privateRoutes с помощью ф-ции map и объекты , которые в privateRoutes передаем в <Route>
      <Routes>
      {privateRoutes.map(route => <Route path={route.path} element={<route.component/>} key={route.path} />)}
    </Routes>
      : // Находясь на странице /login компонент не будет отрисован, если пользователь не авторизован
      <Routes>
      {publicRoutes.map(route => <Route path={route.path} element={<route.component/>} key={route.path}/>)}
    </Routes>
  )
  
}
export default AppRouter
