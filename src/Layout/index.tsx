import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { AuthModal, RecoverModal, RegistrationModal, EditModal } from "../Modals";
import { Notifications } from "../components";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <AuthModal />
      <RegistrationModal />
      <RecoverModal />
      <EditModal />
      <Notifications />
    </>
  );
};

export default Layout;
