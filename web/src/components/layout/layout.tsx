import React from "react";

import Header from "../header/header";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
