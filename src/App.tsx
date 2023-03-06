import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { ProductsPage, ErrorPage, FavoritesPage, DetailPage } from "./pages";
import RouterNames from "./constants/routes";
import "./base.scss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={RouterNames.main} element={<Layout />}>
        <Route index path={RouterNames.products} element={<ProductsPage />} />
        <Route index path={RouterNames.favorites} element={<FavoritesPage />} />
        <Route index path={RouterNames.detail} element={<DetailPage />} />
        <Route path={RouterNames.error} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
