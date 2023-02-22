import React, { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { MainPage, ErrorPage } from "./pages";
import { ProductsType } from "./api";
import CardContext from "./context/cardContext";
import RouterNames from "./constants/routes";
import "./base.scss";

const App: React.FC = () => {
  const [cards, setCards] = useState<ProductsType>([]);
  const [amount, setAmount] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");

  const memoContext = useMemo(
    () => ({ cards, setCards, amount, setAmount, searchValue, setSearchValue }),
    [cards, amount]
  );

  return (
    <CardContext.Provider value={memoContext}>
      <Routes>
        <Route path={RouterNames.main} element={<Layout />}>
          <Route index path={RouterNames.main} element={<MainPage />} />
          <Route path={RouterNames.error} element={<ErrorPage />} />
        </Route>
      </Routes>
    </CardContext.Provider>
  );
};

export default App;
