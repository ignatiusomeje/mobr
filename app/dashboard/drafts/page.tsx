"use client";
import DashboardWrapper from "@/Components/DashboardWrapper";
import React from "react";
import DraftTemp from "./_Components/DraftTemp";
import NavBar from "@/Components/NavBar";

const page = () => {
  return (
    <DashboardWrapper>
      <NavBar routeName="Drafts" />
      <div className={`px-[20px] overflow-hidden mb-9`}>
        <DraftTemp />
      </div>
    </DashboardWrapper>
  );
};

export default page;
