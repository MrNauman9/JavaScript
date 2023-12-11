import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Layout from './Layout';
import HouseDetail from '../Pages/HouseDetail/HouseDetail';
import RoomDetail from '../Pages/RoomDetail/RoomDetail';
function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='houseDetail' element={<HouseDetail />} />
          <Route path='roomDetail' element={<RoomDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default ReactRoutes