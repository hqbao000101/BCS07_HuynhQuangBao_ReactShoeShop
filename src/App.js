import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoeStore from "./Components/ShoeStore";
import ProductList from "./Components/ProductList";
import Home from "./Components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ShoeStore />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/shop" element={<ShoeStore />}>
          <Route index element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
