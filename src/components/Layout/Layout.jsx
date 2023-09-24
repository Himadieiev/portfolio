import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Footer from "../Footer/Footer";
import ScrollToTop from "../../utils/scrollToTop";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
