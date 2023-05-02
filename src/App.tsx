import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import {
  ProductsPage,
  ErrorPage,
  FavoritesPage,
  DetailPage,
  FAQ,
  ProfilePage,
  BasketPage,
} from "./pages";
import RouterNames from "./constants/routes";
import { TOKEN } from "./constants/storage";
import { API } from "./api";
import { useAppDispatch, useAppSelector } from "./store";
import { setUserData } from "./store/user/actions";
import { setChart, setFavoritesProducts } from "./store/products/actions";
import { setModalAuth } from "./store/modals/actions";
import ChartPage from "./pages/ChartPage";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { data, token } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!token) dispatch(setModalAuth(true));
    else if (!data && window.sessionStorage.getItem(TOKEN))
      API.GetUserInfo().then((resp) => dispatch(setUserData({ data: resp })));
  }, [token, data]);

  useEffect(() => {
    if (data && token)
      API.GetProducts().then(({ products }) => {
        const newFavorites = products.filter((el) => el.likes.includes(data?._id));
        dispatch(setFavoritesProducts(newFavorites));
        const popular = [...products.sort((a, b) => b.likes.length - a.likes.length)].slice(0, 10);
        dispatch(setChart(popular));
      });
  }, [data, token]);

  useEffect(() => {
    if (pathname !== "/" && !token) navigate("/");
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<ProductsPage />} />
        <Route path={RouterNames.favorites} element={<FavoritesPage />} />
        <Route path={RouterNames.detail} element={<DetailPage />} />
        <Route path={RouterNames.faq} element={<FAQ />} />
        <Route path={RouterNames.profile} element={<ProfilePage />} />
        <Route path={RouterNames.basket} element={<BasketPage />} />
        <Route path={RouterNames.chart} element={<ChartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
