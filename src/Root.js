import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Home from 'views/Home'
import MainTemplate from 'templates/MainTemplate'
import {routes} from 'config/routes';

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Routes>
          {
            routes.map(route => {
              if (route.path === '/') {
                return <Route exact key={route.path} path={route.path} element={<Home />}></Route>
              } else {
                return <Route exact key={route.path} path={route.path} element={route.component}></Route>
              }
            })
          }
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  )
}

export default Root