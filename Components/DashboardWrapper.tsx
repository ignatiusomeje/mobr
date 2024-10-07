import React from "react";
import SideBar from "./SideBar";
// import NavBar from "./NavBar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex`}>
      <SideBar />
      <div className={`flex flex-col h-screen w-full .max-w-[1440px]`}>
        {/* <NavBar routeName={`car Listing`} /> */}
        {children}
      </div>
    </div>
  );
};

export default DashboardWrapper;
