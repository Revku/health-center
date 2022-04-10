import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Home from 'views/Home'
import MainTemplate from 'templates/MainTemplate'

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </MainTemplate>
  )
}

export default Root