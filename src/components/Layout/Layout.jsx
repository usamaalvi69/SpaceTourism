import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "..";
import usePageSetup from "../../hooks/usePageSetup";

export const Layout = () => {
  usePageSetup()
  return (
    <>
      <Header />
      <Outlet /> 
    </>
  );
};
