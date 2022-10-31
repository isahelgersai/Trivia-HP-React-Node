import React from "react";
import Logo from "../../assets/images/logo.jpg";

const Layout = ({ children }) => {
  return (
    <>
      <div className="border-b-2 border-blue-300">
        <img src={Logo} alt="logo" className="w-full" />
      </div>
      <div className="w-full min-h-screen px-40 py-20">{children}</div>;
    </>
  );
};

export default Layout;
