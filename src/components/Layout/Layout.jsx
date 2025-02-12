import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "..";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export const Layout = () => {
  useDocumentTitle();

  return (
    <>
      <Header />
      <Outlet /> 
    </>
  );
};
