import NavBar from "./navBar/navBar";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-row-reverse justify-between">
        <NavBar userName="curedbylethe" />
      </div>
      <main className=" mt-28">{children}</main>
    </>
  );
}
