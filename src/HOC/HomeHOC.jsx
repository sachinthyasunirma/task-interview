import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from '../Layouts/HomeLayout'

function HomeHOC({path, component:Component, rest}) {
  return (
    <Routes>
        <Route
        path={path}
        {...rest}
        element={<HomeLayout>{Component}</HomeLayout>}
        />
    </Routes>
  )
}

export default HomeHOC