import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
// import NavBar from "./NavBar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector((state) => state.login.admin.jwtToken);
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  });
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
