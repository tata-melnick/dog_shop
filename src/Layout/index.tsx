import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { AuthModal, RecoverModal, RegistrationModal } from "../Modals";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <AuthModal />
      <RegistrationModal />
      <RecoverModal />
    </>
  );
};

export default Layout;
