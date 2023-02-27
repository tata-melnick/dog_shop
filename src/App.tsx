import React, { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { ProductsPage, ErrorPage } from "./pages";
import { ProductsType } from "./api";
import CardContext from "./context/cardContext";
import RouterNames from "./constants/routes";
import "./base.scss";

const App: React.FC = () => {
  const [cards, setCards] = useState<ProductsType>([]);
  const [amount, setAmount] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoad, setIsLoad] = useState<boolean>(true);

  const memoContext = useMemo(
    () => ({ cards, setCards, amount, setAmount, searchValue, setSearchValue, isLoad, setIsLoad }),
    [cards, amount]
  );

  return (
    <CardContext.Provider value={memoContext}>
      <Routes>
        <Route path={RouterNames.main} element={<Layout />}>
          <Route index path={RouterNames.main} element={<ProductsPage />} />
          <Route path={RouterNames.error} element={<ErrorPage />} />
        </Route>
      </Routes>
    </CardContext.Provider>
  );
};

export default App;
