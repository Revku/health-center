import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Home from 'views/Home'

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Root