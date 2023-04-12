import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { ProductsPage, ErrorPage, FavoritesPage, DetailPage, FAQ } from "./pages";
import RouterNames from "./constants/routes";
import { setModalAuth } from "./store/modals/actions";
import { TOKEN } from "./constants/storage";
import { API } from "./api";
import { useAppDispatch, useAppSelector } from "./store";
import { setUserData } from "./store/user/actions";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!token) dispatch(setModalAuth(true));
    else
      API.GetUserInfo().then((resp) =>
        dispatch(setUserData({ data: resp, token: window.sessionStorage.getItem(TOKEN) }))
      );
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<ProductsPage />} />
        <Route path={RouterNames.favorites} element={<FavoritesPage />} />
        <Route path={RouterNames.detail} element={<DetailPage />} />
        <Route path={RouterNames.faq} element={<FAQ />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
