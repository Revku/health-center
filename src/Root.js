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
              return <Route key={route.path} path={route.path} element={route.component}></Route>
            })
          }
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  )
}

export default Root